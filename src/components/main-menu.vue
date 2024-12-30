<template>
   <div class="menu">
      <h1>ARCHEX EMPIRES</h1>
      <h2>{{ $t('startGame') }}</h2>

      <div class="levels">
         <div class="label">{{ $t('empires.0') }}</div>
         <div v-on:click="selectMap('a')" class="level">
            <img src="../assets/maps/a.jpg" />
            <span>{{ $t('level', { x: 1 }) }}</span>
         </div>
         <div v-on:click="selectMap('b')" class="level">
            <img src="../assets/maps/b.jpg" />
            <span>{{ $t('level', { x: 2 }) }}</span>
         </div>
      </div>
   </div>

   <div class="toolbar"></div>
   <div class="made-by">Made by AndrejevVE</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({ select: Function } as any);
const selectMap = (name: string) => props.select(name);
</script>
