<template>
   <div @mouseover="showTooltip($event)" @mouseleave="hideTooltip($event)" :class="{ destroyed: spot.animations?.destroyed }">
      <img :src="drawingManager.getSpotImg(spot)" />
      <img class="resource" :src="drawingManager.getSpotResourceImg(spot.resourceType)" v-if="spot.resourceType" />
      <div class="number" v-if="spot.resourceType">{{ getCard()?.num }}</div>
      <div class="gain" v-if="spot.animations?.gain > 0">+{{ spot.animations?.gain }}</div>
   </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DrawingManager from './managers/drawing.manager';
import Card from './models/card';
import FieldSpot from './models/field-spot';
import { useI18n } from 'vue-i18n';
import CardManager from './managers/card.manager';
const { t } = useI18n();

const drawingManager = new DrawingManager();
const cardManager = new CardManager();
const props = defineProps({ spot: {} as FieldSpot, showTooltip: false } as any);
let tooltipShown = false;
let tooltip: HTMLDivElement;

const showTooltip = (event: MouseEvent) => {
   if (tooltipShown || props.spot.mismatch || !props.showTooltip) return;
   tooltip = document.createElement('div');
   tooltip.classList.add('tooltip');
   tooltip.innerText = getTooltip()!;
   document.body.appendChild(tooltip);
   const rect = (event.target as HTMLElement).getBoundingClientRect();
   tooltip.style.left = rect.x + rect.width / 2 + 'px';
   tooltip.style.top = rect.y + 'px';
   tooltip.style.minWidth = rect.width + 'px';
   tooltipShown = true;
};

const hideTooltip = (_: MouseEvent) => {
   if (!tooltipShown) return;
   document.body.removeChild(tooltip);
   tooltipShown = false;
};

const getCard = () => {
   return cardManager.findCardByResource(props.spot.resourceType)!;
};

const getTooltip = () => {
   if (props.spot.resourceType) return t('resources.' + props.spot.resourceType);
   let name = 'spots.' + props.spot.spotType;
   if (props.spot.spotType < 2 || props.spot.spotType === 5) name += '.' + props.spot.biomType;
   return t(name);
};
</script>
