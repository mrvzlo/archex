<template>
   <div v-for="(spot, i) of buildings" v-on:click="selectSpot(spot)" @mouseenter="hovered.spot = spot" @mouseleave="hovered.spot = null">
      <spot-view :spot="spot" :showTooltip="true" />
      <div class="hotkey">{{ i + 1 }}</div>
   </div>
   <div class="position-absolute rule" v-if="hovered.spot">{{ rules[hovered.spot.spotType] }}</div>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue';
import SpotView from './spot-view.vue';
import { BiomType } from './models/biom.type';
import { SpotType } from './models/spot.type';
import Spot from './models/spot';
import { defineProps, reactive } from 'vue';
import Cost from './models/cost';

const hovered = reactive({ spot: null as any as Spot });

const buildings: Spot[] = [
   { spotType: SpotType.Fishing, biomType: BiomType.Water },
   { spotType: SpotType.Woodman, biomType: BiomType.Grass },
   { spotType: SpotType.Farm, biomType: BiomType.Grass },
   { spotType: SpotType.Well, biomType: BiomType.Grass },
   { spotType: SpotType.Empty, biomType: BiomType.Grass },
   { spotType: SpotType.Cave, biomType: BiomType.Grass },
   { spotType: SpotType.Fort, biomType: BiomType.Grass },
   { spotType: SpotType.Village1, biomType: BiomType.Grass },
   { spotType: SpotType.Tower, biomType: BiomType.Grass },
];

defineExpose({ buildings });

const rules: string[] = [];
rules[SpotType.Empty] = 'Озеленяет клетку';
rules[SpotType.Tower] = 'Строится на поляне';
rules[SpotType.Fort] = 'Строится на поляне';
rules[SpotType.Farm] = 'Строится на поляне';
rules[SpotType.Village1] = 'Строится на поляне';
rules[SpotType.Cave] = 'Выкапывается в горе';

const costs: Cost[] = [];

const props = defineProps({ selectFunc: Function });

const selectSpot = (spot: Spot) => props.selectFunc!(spot);
</script>
