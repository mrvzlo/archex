<template>
   <div class="grid map" :style="'--count:' + width" :class="{ hoverable: mode.hover }">
      <div
         :class="{ empty: spot.empty, disabled: !spot.available, odd: !spot.evenRow, even: spot.evenRow }"
         v-for="(spot, j) in field.spots"
         :key="j"
         class="spot"
         v-on:click="placeSelected(j)"
      >
         <spot-view :spot="spot" />
      </div>
   </div>
   <div class="toolbar">
      <tool-bar :selectFunc="selectFromToolBar" />
   </div>
   <div v-if="selected.spot" class="cursor-img" :style="`top:${mousePosition.y}px;left:${mousePosition.x}px;`">
      <spot-view :spot="selected.spot" />
   </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SpotView from './spot-view.vue';
import ToolBar from './tool-bar.vue';
import FieldManager from './field.manager';
import Spot from './models/spot';
import { BiomType } from './models/biom.type';

const width = 5;
const height = 11;
const manager = new FieldManager();
const field = reactive(manager.createField(width, height));
const mode = reactive({ hover: false });
const mousePosition = reactive({ x: 0, y: 0 });
let selected = reactive({ spot: null as unknown as Spot | null });

const placeSelected = (index: number) => {
   if (!mode.hover) return;
   field.spots[index].spotType = selected.spot!.spotType;
   if (selected.spot!.biomType !== BiomType.None) field.spots[index].biomType = selected.spot!.biomType;
   deselect();
};

const selectFromToolBar = (spot: Spot) => {
   selected.spot = spot;
   mode.hover = true;
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
};
</script>
