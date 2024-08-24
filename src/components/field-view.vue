<template>
   <div class="resources-list">
      <div v-for="resource of bank" v-key="resource">
         <div v-if="resource.count > 0" class="row">
            <img :src="drawingManager.getSpotResourceImg(resource.resource)" :class="{ small: resource.resource < 99 }" />
            <span>{{ resource.count }}</span>
         </div>
      </div>
   </div>
   <div class="grid map" :style="'--count:' + width" :class="{ hoverable: mode.hover }">
      <div
         :class="{
            empty: spot.spotType === SpotType.Empty,
            disabled: !spot.available,
            odd: !spot.evenRow,
            even: spot.evenRow,
            mismatch: spot.mismatch,
         }"
         v-for="(spot, j) in field.spots"
         :key="j"
         class="spot"
         v-on:click="placeSelected(j)"
      >
         <spot-view :spot="spot" :showTooltip="true" />
      </div>
   </div>
   <div class="toolbar">
      <tool-bar :selectFunc="selectFromToolBar" />
   </div>
   <div v-if="selected.spot" class="cursor-img" :style="`top:${mousePosition.y}px;left:${mousePosition.x}px;`">
      <spot-view :spot="selected.spot" />
   </div>

   <div class="card-select" v-if="preSelected">
      <div class="backdrop"></div>
   </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SpotView from './spot-view.vue';
import ToolBar from './tool-bar.vue';
import FieldManager from './managers/field.manager';
import Spot from './models/spot';
import { BiomType } from './models/biom.type';
import { SpotType } from './models/spot.type';
import DrawingManager from './managers/drawing.manager';
import Cost from './models/cost';
import { ResourceType } from './models/resource.type';

const width = 9;
const height = 7;
const manager = new FieldManager();
const drawingManager = new DrawingManager();

const folder = require.context('../assets/maps', false, /\.json$/)!;
const spots = folder('./1.json');

const field = reactive(manager.createField(width, height, spots));
const mode = reactive({ hover: false });
const mousePosition = reactive({ x: 0, y: 0 });
let selected = reactive({ spot: null as unknown as Spot | null });
let preSelected: Spot;
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

const placeSelected = (index: number) => {
   if (!mode.hover) return;
   const spot = field.spots[index];
   if (spot.mismatch) return;
   if (selected.spot!.spotType !== SpotType.Empty) spot.spotType = selected.spot!.spotType;
   if (selected.spot!.biomType !== BiomType.None) spot.biomType = selected.spot!.biomType;
   deselect();
};

const selectFromToolBar = (spot: Spot) => {
   selected.spot = spot;
   mode.hover = true;
   manager.setMatches(field, spot);
};

window.onmousemove = (event: MouseEvent) => {
   mousePosition.x = event.clientX;
   mousePosition.y = event.clientY;
};

window.onkeyup = (event: KeyboardEvent) => {
   if (event.code === 'Escape') deselect();
};

const deselect = () => {
   mode.hover = false;
   selected.spot = null;
   manager.setMatches(field, null);
};
</script>
