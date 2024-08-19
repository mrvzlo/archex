<template>
   <div @mouseover="showTooltip($event)" @mouseleave="hideTooltip($event)">
      <img :src="drawingManager.getSpotImg(spot)" />
      <img class="resource" :src="drawingManager.getSpotResourceImg(spot.resourceType)" v-if="spot.resourceType" />
      <div class="number" v-if="spot.resourceType">{{ getCard().num }}</div>
   </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DrawingManager from './managers/drawing.manager';
import { BiomType } from './models/biom.type';
import Card from './models/card';
import Spot from './models/spot';
import { SpotType } from './models/spot.type';

const drawingManager = new DrawingManager();
const props = defineProps({ spot: {} as Spot, showTooltip: false });
let tooltipShown = false;
let tooltip: HTMLDivElement;

const showTooltip = (event: MouseEvent) => {
   if (tooltipShown || props.spot.mismatch || !props.showTooltip) return;
   tooltip = document.createElement('div');
   tooltip.classList.add('tooltip');
   tooltip.innerText = getTooltip()!;
   document.body.appendChild(tooltip);
   const rect = (event.target as HTMLElement).getBoundingClientRect();
   tooltip.style.left = rect.x - 2 + 'px';
   tooltip.style.top = rect.y + 'px';
   tooltip.style.width = rect.width + 'px';
   tooltipShown = true;
};

const hideTooltip = (event: MouseEvent) => {
   if (!tooltipShown) return;
   document.body.removeChild(tooltip);
   tooltipShown = false;
};

const getCard = () => {
   const cards = require('../assets/json/cards.json')! as Card[];
   return cards.find((x) => x.resource === props.spot.resourceType);
};

const getTooltip = () => {
   if (props.spot.biomType === BiomType.Sand) return 'Пустырь';
   switch (props.spot.spotType) {
      case SpotType.Tower:
         return 'Башня';
      case SpotType.Cave:
         return 'Шахта';
      case SpotType.Empty:
      case SpotType.Empty2:
         return props.spot.biomType === BiomType.Grass ? 'Поляна' : props.spot.biomType === BiomType.Water ? 'Вода' : 'Пустырь';
      case SpotType.Farm:
         return 'Ферма';
      case SpotType.Mountain:
         return 'Гора';
      case SpotType.Fort:
         return 'Форт';
      case SpotType.Woodman:
         return 'Лесник';
      case SpotType.Fishing:
         return 'Рыбак';
      case SpotType.Well:
      case SpotType.Well2:
         return 'Колодец';
      case SpotType.Village1:
      case SpotType.Village2:
         return 'Деревня';
   }
};
</script>
