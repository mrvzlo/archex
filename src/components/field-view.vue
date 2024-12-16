<template>
   <div class="top-info">
      <div class="help-text" v-if="gameState.roundState === RoundState.Placement">{{ $t('escape') }}</div>
      <div class="help-text" v-if="gameState.roundState === RoundState.BeforeStart">{{ $t('enter') }}</div>
      <div class="dice" v-if="gameState.roundState !== RoundState.Placement">
         <div v-if="gameState.roundState === RoundState.DicePick" class="label" :class="{ hidden: dice.animating }">
            {{ dice.sum }}
         </div>
         <die
            v-if="gameState.roundState === RoundState.DicePick"
            v-for="(die, i) of dice.values"
            :value="die"
            :animating="dice.animating"
            v-on:click="selectDie(i)"
            :class="{ selected: dice.selected[i] }"
         />
         <button
            v-if="gameState.roundState === RoundState.DicePick"
            v-on:click="gain()"
            :class="{ hidden: dice.animating }"
            :disabled="dice.selectedCount < 2"
         >
            OK
         </button>
      </div>
   </div>
   <div class="resources-list">
      <div v-for="resource of bank">
         <div
            v-if="resource.count > 0 || resource.important"
            class="row"
            :class="{ notEnough: resource.important && resource.count < field.spotsToFeed }"
         >
            <img :src="drawingManager.getSpotResourceImg(resource.resource)" :class="{ small: resource.resource < 99 }" />
            <span>{{ resource.count }}</span>
            <span class="minus">({{ resource.count - field.spotsToFeed }})</span>
         </div>
      </div>
   </div>
   <div class="grid map" :style="'--count:' + size.width" :class="{ hoverable: gameState.roundState === RoundState.Placement }">
      <div
         :class="{
            empty: spot.spotType === SpotType.Empty,
            disabled: !spot.available,
            odd: !spot.evenRow,
            even: spot.evenRow,
            mismatch: spot.mismatch,
         }"
         v-for="spot in field.spots"
         class="spot"
         v-on:click="placeSelected(spot)"
      >
         <spot-view :spot="spot" :showTooltip="true" />
      </div>
   </div>

   <round-clock :nextRound="startRoll" :state="gameState" :animating="dice.animating" />
   <div class="toolbar" :class="{ disabled: gameState.roundState !== RoundState.Buying }">
      <tool-bar :selectFunc="selectFromToolBar" ref="toolbar" />
   </div>
   <div v-if="preselected.spot" class="cursor-img" :style="`top:${mousePosition.y}px;left:${mousePosition.x}px;`">
      <spot-view :spot="preselected.spot" />
   </div>

   <div class="card-select backdrop" v-if="gameState.roundState === RoundState.CardChoose">
      <div class="inner">
         <div v-for="card of toChoose.cards" class="card" v-on:click="confirmCard(card)">
            <div class="title">
               <div>
                  {{ $t('resources.' + card.resource) }}
               </div>
               <img :src="drawingManager.getSpotResourceImg(card.resource)" />
            </div>
            <div class="flex-text-row">
               <span class="my-auto">{{ $t('produces') }}</span>
               <img :src="drawingManager.getSpotResourceImg(card.converts ?? card.resource)" />
               <span>x{{ card.power ?? 1 }}&nbsp;</span>
               <div v-for="aoe in card.aoe">
                  <span>{{ aoe.power! > 0 ? '+' : '' }}{{ aoe.power }} {{ $t('forEach') }}</span>
                  <img :src="drawingManager.getSpotResourceImg(aoe.resource!)" />
                  <span>{{ $t('inRange', { x: aoe.range }) }}</span>
               </div>
               <br />
               <span v-if="card.consumes">
                  {{ $t('consume') }}
                  <span v-for="consume in card.consumes">
                     <img :src="drawingManager.getSpotResourceImg(consume.resource!)" />
                     <span>x{{ consume.count ?? 1 }}</span>
                  </span>
               </span>
               <br />
               <span v-if="card.passive >= 0">
                  {{ $t('passive') }}
                  <img :src="drawingManager.getSpotResourceImg(`t${card.passive}`)" />
               </span>
            </div>
            <div class="big-num">{{ card.num }}</div>
         </div>
      </div>
   </div>

   <div class="backdrop game-over" v-if="gameState.roundState === RoundState.GameOver">
      <div class="text center" style="--top: 50; --left: 50">
         {{ $t('gameOver') }}
         <br />
         {{ $t('gameOvers.' + gameState.gameOverType) }}
         <br />
         <button v-on:click="start()">{{ $t('restart') }}</button>
      </div>
   </div>
   <div class="backdrop tutorial" v-if="false"></div>
</template>

<script setup lang="ts">
import { defineProps, inject } from 'vue';
import { reactive, ref } from 'vue';
import SpotView from './spot-view.vue';
import RoundClock from './round-clock.vue';
import Die from './die.vue';
import ToolBar from './tool-bar.vue';
import FieldManager from './managers/field.manager';
import FieldSpot from './models/field-spot';
import { BiomType } from './enums/biom.type';
import { SpotType } from './enums/spot.type';
import DrawingManager from './managers/drawing.manager';
import Cost from './models/cost';
import { ResourceType } from './enums/resource.type';
import CardManager from './managers/card.manager';
import Card from './models/card';
import { RoundState } from './enums/round-state';
import GameState from './models/game-state';
import ProductionManager from './managers/production.manager';
import AudioManager from './managers/audio.manager';
import { RoundStageType } from './enums/round-stage.type';
import MapSaveManager from './managers/map-save.manager';
import GameField from './models/game-field';

const props = defineProps({ map: '' } as any);

const drawingManager = inject('DrawingManager')! as DrawingManager;
const cardManager = inject('CardManager')! as CardManager;
const audioManager = inject('AudioManager')! as AudioManager;
const productionManager = new ProductionManager(cardManager);
const mapsManager = new MapSaveManager();
const manager = new FieldManager();

let size = reactive({ width: 0, height: 0 });
let field = reactive({} as GameField);
const gameState = reactive(new GameState());
const mousePosition = reactive({ x: 0, y: 0 });
let preselected = reactive({ spot: null as unknown as FieldSpot | null });
let lastPlaced: FieldSpot;
let toChoose = reactive({ cards: [] as Card[] });
const toolbar = ref();
const dice = reactive({ values: [1, 1, 1, 1], selected: [] as boolean[], animating: false, sum: 0, selectedCount: 0 });

let bank = reactive([] as Cost[]);

const start = () => {
   gameState.restart();
   const save = mapsManager.loadSave(props.map);
   bank = save.bank;
   manager.setField(field, save.width, save.height, save.map);
   size.width = save.width;
   size.height = save.height;
};

const placeSelected = (spot: FieldSpot) => {
   if (gameState.roundState !== RoundState.Placement) return;
   if (spot.mismatch) return;
   const isDestroy = preselected.spot?.spotType === SpotType.Rift;
   spot.animations.destroyed = isDestroy;
   if (isDestroy) manager.destroy(spot);
   else {
      if (preselected.spot!.spotType !== SpotType.Empty) spot.spotType = preselected.spot!.spotType;
      if (preselected.spot!.biomType !== BiomType.None) spot.biomType = preselected.spot!.biomType;
   }
   if (isDestroy) audioManager.playDestroy();
   else audioManager.playPlace();
   lastPlaced = spot;

   deselect();
   setupCardsToChoose();
   manager.recalculateSpotsToFeed(field);
};

const setupCardsToChoose = () => {
   toChoose.cards = cardManager.findRandomCardsBySpot(lastPlaced.spotType, lastPlaced.biomType);
   gameState.roundState = RoundState.CardChoose;
   if (!toChoose.cards.length) gameState.roundState = RoundState.Buying;
};

const selectFromToolBar = (spot: FieldSpot) => {
   if (gameState.roundState !== RoundState.Buying) return;
   preselected.spot = spot;
   gameState.roundState = RoundState.Placement;
   manager.setMatches(field, spot);
};

const confirmCard = (card: Card) => {
   lastPlaced!.resourceType = card.resource;
   toChoose.cards = [];
   gameState.roundState = RoundState.Buying;
};

window.onmousemove = (event: MouseEvent) => {
   mousePosition.x = event.clientX;
   mousePosition.y = event.clientY;
};

window.onkeyup = (event: KeyboardEvent) => {
   if (event.code === 'Escape') deselect();
   if (event.code === 'Enter') startRoll();
   if (event.code.startsWith('Digit')) {
      const key = (Number(event.key) + 9) % 10;
      if (key >= toolbar.value.buildings.length) return;
      selectFromToolBar(toolbar.value.buildings[key]);
   }
};

const deselect = () => {
   gameState.roundState = RoundState.Buying;
   preselected.spot = null;
   manager.setMatches(field, null);
};

const startRoll = () => {
   if (gameState.roundState !== RoundState.Buying && gameState.roundState !== RoundState.BeforeStart) return;
   dice.animating = true;
   for (let i = 0; i < 4; i++) dice.selected[i] = false;
   gameState.nextRound();
   manager.clearAnimations(field);
   dice.selectedCount = 0;
   dice.sum = 0;

   performRegularConsumes();
   const gameOver = () => gameState.roundState === RoundState.GameOver;
   if (gameOver()) return;

   setTimeout(() => {
      for (let i = 0; i < 4; i++) dice.values[i] = Math.floor(Math.random() * 6) + 1;
   }, 600);
   setTimeout(() => (dice.animating = false), 1000);
};

const performRegularConsumes = () => {
   if (gameState.roundStage === RoundStageType.Day) manager.performConsume(ResourceType.Food, field, bank);
   if (gameState.roundStage === RoundStageType.Night) manager.performConsume(ResourceType.Weapon, field, bank);
   manager.recalculateSpotsToFeed(field);
   if (!manager.isGameOver(field)) return;
   gameState.roundState = RoundState.GameOver;
   gameState.gameOverType = productionManager.getGameOverType(bank);
};

const selectDie = (num: number) => {
   if (dice.animating) return;
   const canSelect = dice.selectedCount < 2 || dice.selected[num];
   if (!canSelect) return;
   dice.selected[num] = !dice.selected[num];
   dice.sum = dice.values.reduce((a, b, i) => a + b * (dice.selected[i] ? 1 : 0), 0);
   dice.selectedCount = dice.selected.filter((x) => x).length;
};

const gain = () => {
   productionManager.produceByDice(bank, field, dice.sum);
   productionManager.produceByTime(bank, field, gameState.roundStage);
   gameState.roundState = RoundState.Buying;
};

start();
</script>
