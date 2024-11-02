<template>
   <div class="top-info">
      <div class="help-text" v-if="state.current === RoundState.Placement">{{ $t('escape') }}</div>
      <div class="dice" v-if="state.current !== RoundState.Placement">
         <button v-on:click="startRoll()" v-if="state.current === RoundState.BeforeRoll">Roll</button>
         <div v-if="state.current === RoundState.DicePick" class="label" :class="{ hidden: dice.selectedCount < 2 }">
            {{ dice.sum }}
         </div>
         <die
            v-if="state.current === RoundState.DicePick"
            v-for="(die, i) of dice.values"
            :value="die"
            :animating="dice.animating"
            v-on:click="selectDie(i)"
            :class="{ selected: dice.selected[i] }"
         />
         <button v-if="state.current === RoundState.DicePick" v-on:click="gain()" :class="{ hidden: dice.selectedCount < 2 }">OK</button>
      </div>
   </div>
   <div class="resources-list">
      <div v-for="resource of bank">
         <div v-if="resource.count > 0" class="row">
            <img :src="drawingManager.getSpotResourceImg(resource.resource)" :class="{ small: resource.resource < 99 }" />
            <span>{{ resource.count }}</span>
         </div>
      </div>
   </div>
   <div class="grid map" :style="'--count:' + width" :class="{ hoverable: state.current === RoundState.Placement }">
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
   <div class="toolbar" :class="{ disabled: state.current !== RoundState.Buying }">
      <tool-bar :selectFunc="selectFromToolBar" ref="toolbar" />
   </div>
   <div v-if="preselected.spot" class="cursor-img" :style="`top:${mousePosition.y}px;left:${mousePosition.x}px;`">
      <spot-view :spot="preselected.spot" />
   </div>

   <div class="card-select" v-if="state.current === RoundState.CardChoose">
      <div class="backdrop">
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
               <span v-if="card.aoeRange">{{ card.aoePower! > 0 ? '+' : '' }}{{ card.aoePower }} {{ $t('forEach', { x: card.aoeRange }) }}:</span>
               <div class="linked">
                  <img v-for="linked of card.aoeResources" :src="drawingManager.getSpotResourceImg(linked)" />
               </div>
            </div>
            <div class="big-num">{{ card.num }}</div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import SpotView from './spot-view.vue';
import Die from './die.vue';
import ToolBar from './tool-bar.vue';
import FieldManager from './managers/field.manager';
import Spot from './models/spot';
import { BiomType } from './models/biom.type';
import { SpotType } from './models/spot.type';
import DrawingManager from './managers/drawing.manager';
import Cost from './models/cost';
import { ResourceType } from './models/resource.type';
import CardManager from './managers/card.manager';
import Card from './models/card';
import { RoundState } from './models/round-state';

const width = 9;
const height = 7;
const manager = new FieldManager();
const drawingManager = new DrawingManager();
const cardManager = new CardManager();

const folder = require.context('../assets/maps', false, /\.json$/)!;
const spots = folder('./1.json');

const field = reactive(manager.createField(width, height, spots));
const state = reactive({ current: RoundState.BeforeRoll });
const mousePosition = reactive({ x: 0, y: 0 });
let preselected = reactive({ spot: null as unknown as Spot | null });
let lastPlaced: Spot;
let toChoose = reactive({ cards: [] as Card[] });
const toolbar = ref();
const dice = reactive({ values: [1, 1, 1, 1], selected: [] as boolean[], animating: false, sum: 0, selectedCount: 0 });

const bank = reactive([
   { resource: ResourceType.Food, count: 20 },
   { resource: ResourceType.Water, count: 5 },
   { resource: ResourceType.Wood1, count: 0 },
   { resource: ResourceType.Stone, count: 0 },
   { resource: ResourceType.Leather, count: 0 },
   { resource: ResourceType.Iron, count: 0 },
   { resource: ResourceType.Weapon, count: 5 },
   { resource: ResourceType.Armor, count: 0 },
   { resource: ResourceType.Books, count: 0 },
   { resource: ResourceType.Gems, count: 0 },
] as Cost[]);

const placeSelected = (spot: Spot) => {
   if (state.current !== RoundState.Placement) return;
   if (spot.mismatch) return;
   if (preselected.spot!.spotType !== SpotType.Empty) spot.spotType = preselected.spot!.spotType;
   if (preselected.spot!.biomType !== BiomType.None) spot.biomType = preselected.spot!.biomType;
   lastPlaced = spot;
   deselect();
   setupCardsToChoose();
};

const setupCardsToChoose = () => {
   toChoose.cards = cardManager.findRandomCardsBySpot(lastPlaced.spotType, lastPlaced.biomType);
   state.current = RoundState.CardChoose;
};

const selectFromToolBar = (spot: Spot) => {
   if (state.current !== RoundState.Buying) return;
   preselected.spot = spot;
   state.current = RoundState.Placement;
   manager.setMatches(field, spot);
};

const confirmCard = (card: Card) => {
   lastPlaced!.num = card.num;
   lastPlaced!.resourceType = card.resource;
   toChoose.cards = [];
   state.current = RoundState.Buying;
};

window.onmousemove = (event: MouseEvent) => {
   mousePosition.x = event.clientX;
   mousePosition.y = event.clientY;
};

window.onkeyup = (event: KeyboardEvent) => {
   if (event.code === 'Escape') deselect();
   if (event.code.startsWith('Digit')) {
      const key = Number(event.key);
      selectFromToolBar(toolbar.value.buildings[key - 1]);
   }
};

const deselect = () => {
   state.current = RoundState.Buying;
   preselected.spot = null;
   manager.setMatches(field, null);
};

const startRoll = () => {
   dice.animating = true;
   for (let i = 0; i < 4; i++) dice.selected[i] = false;
   state.current = RoundState.DicePick;
   dice.selectedCount = 0;
   dice.sum = 0;

   setTimeout(() => {
      for (let i = 0; i < 4; i++) dice.values[i] = Math.floor(Math.random() * 6) + 1;
   }, 600);
   setTimeout(() => (dice.animating = false), 1000);
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
   state.current = RoundState.Buying;
};
</script>
