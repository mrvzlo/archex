<template>
   <div class="grid">
      <div class="container">
         <div :class="'spot ' + (spot.empty ? 'empty ' : '') + (spot.available ? ' ' : 'disabled')" v-for="(spot, j) in field.spots" :key="j"></div>
      </div>
   </div>
</template>

<script setup lang="ts">
import FieldManager from './field.manager';

const manager = new FieldManager();
const field = manager.createField(10, 10);
</script>
