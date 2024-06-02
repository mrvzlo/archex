<template>
   <div>
      <img :src="getImgUrl()" />
   </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { BiomType } from './models/biom.type';
import Spot from './models/spot';

const props = defineProps({ spot: Spot });

function getImgUrl() {
   const images = getFolder()!;
   return images('./' + props.spot.spotType + '.png');
}

function getFolder() {
   switch (props.spot.biomType) {
      case BiomType.None:
         return require.context('../assets/images/none', false, /\.png$/);
      case BiomType.Grass:
         return require.context('../assets/images/grass', false, /\.png$/);
      case BiomType.Gravel:
         return require.context('../assets/images/gravel', false, /\.png$/);
      case BiomType.Dirt:
         return require.context('../assets/images/dirt', false, /\.png$/);
      case BiomType.Sand:
         return require.context('../assets/images/sand', false, /\.png$/);
      case BiomType.Ice:
         return require.context('../assets/images/ice', false, /\.png$/);
   }
}
</script>
