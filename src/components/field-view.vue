<template>
   <div class="grid" :style="'--count:' + width">
      <div
         :class="{ empty: spot.empty, disabled: !spot.available, odd: !spot.evenRow, even: spot.evenRow }"
         v-for="(spot, j) in field.spots"
         :key="j"
         class="spot"
         v-on:click="select(j)"
      >
         <spot-view :spot="spot" />
      </div>
   </div>
   <div class="toolbar">
      <tool-bar />
   </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SpotView from './spot-view.vue';
import ToolBar from './tool-bar.vue';
import FieldManager from './field.manager';

const width = 5;
const height = 11;
const manager = new FieldManager();
const field = reactive(manager.createField(width, height));

function select(index: number) {
   field.spots[index].spotType++;
   field.spots[index].spotType %= 14;
}
</script>
