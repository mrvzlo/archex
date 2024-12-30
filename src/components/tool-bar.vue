<template>
   <div v-for="(spot, i) of buildings" v-on:click="selectSpot(spot)" @mouseenter="hovered.spot = spot" @mouseleave="hovered.spot = null">
      <spot-view :spot="spot" :showTooltip="true" />
      <div class="hotkey">{{ (i + 1) % 10 }}</div>
   </div>
   <div class="position-absolute rule" v-if="hovered.spot">{{ rules[hovered.spot.spotType] }}</div>
</template>

<script setup lang="ts">
import SpotView from './spot-view.vue';
import { SpotType } from './enums/spot.type';
import { defineProps, reactive } from 'vue';
import Cost from './models/cost';
import Spot from './models/spot';

const hovered = reactive({ spot: null as any as Spot | null });

const rules: string[] = [];
rules[SpotType.Empty] = 'Озеленяет клетку';
rules[SpotType.Tower] = 'Строится на поляне';
rules[SpotType.Fort] = 'Строится на поляне';
rules[SpotType.Farm] = 'Строится на поляне';
rules[SpotType.Village1] = 'Строится на поляне';
rules[SpotType.Cave] = 'Выкапывается в горе';

const costs: Cost[] = [];

const props = defineProps({ selectFunc: Function, buildings: [] });

const selectSpot = (spot: Spot | null) => props.selectFunc!(spot);
</script>
