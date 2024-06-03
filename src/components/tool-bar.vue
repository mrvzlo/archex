<template>
   <div class="button">
      <div class="inner">
         <div class="grid" style="--count: 2">
            <div class="spot" v-on:click="selectSpot(SpotType.House)"><img src="../assets/images/none/8.png" /></div>
            <div class="spot even" v-on:click="selectSpot(SpotType.Tower)"><img src="../assets/images/none/9.png" /></div>
            <div class="spot" v-on:click="selectSpot(SpotType.BigTower)"><img src="../assets/images/none/10.png" /></div>
            <div class="spot even" v-on:click="selectSpot(SpotType.Farm)"><img src="../assets/images/none/13.png" /></div>
            <div class="spot" v-on:click="selectSpot(SpotType.City)"><img src="../assets/images/none/6.png" /></div>
            <div class="spot even" v-on:click="selectSpot(SpotType.Cave)"><img src="../assets/images/none/5.png" /></div>
         </div>
      </div>
      <img class="invert" src="../assets/images/buttons/hammer.png" />
   </div>
   <div class="button">
      <div class="inner" style="--count: 2">
         <div class="grid">
            <div class="spot" v-on:click="selectSpot(SpotType.Empty, BiomType.Grass)"><img src="../assets/images/grass/0.png" /></div>
            <div class="spot even" v-on:click="selectSpot(SpotType.Tree, BiomType.Grass)"><img src="../assets/images/grass/1.png" /></div>
            <div class="spot" v-on:click="selectSpot(SpotType.Forest, BiomType.Grass)"><img src="../assets/images/grass/2.png" /></div>
         </div>
      </div>
      <img class="invert" src="../assets/images/buttons/gardening.png" />
   </div>
</template>

<script setup lang="ts">
import { BiomType } from './models/biom.type';
import Spot from './models/spot';
import { SpotType } from './models/spot.type';
import { defineProps } from 'vue';

const props = defineProps({ selectFunc: Function });

const selectSpot = (type: SpotType, biom: BiomType = BiomType.None) => {
   props.selectFunc!({ biomType: biom, spotType: type } as Spot);
};
</script>
