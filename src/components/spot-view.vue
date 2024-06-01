<template>
   <div>
      <img src="../assets/images/Dirt.png" v-if="spot.type === types.Dirt" />
      <img src="../assets/images/Grass.png" v-if="spot.type === types.Grass" />
      <img src="../assets/images/Gravel.png" v-if="spot.type === types.Gravel" />
      <img src="../assets/images/Sand.png" v-if="spot.type === types.Sand" />
      <img src="../assets/images/Stone.png" v-if="spot.type === types.Stone" />
   </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Spot from './models/spot';
import { SpotType } from './models/spot.type';

const types = SpotType;
defineProps({ spot: Spot });
</script>
