<template>
   <div class="menu">
      <h1>ARCHEX EMPIRE</h1>
      <button v-if="!show.levels" v-on:click="show.levels = true">{{ $t('startGame') }}</button>

      <div class="levels" v-if="show.levels">
         <div class="label">{{ $t('empires.0') }}</div>
         <div v-on:click="selectMap('1')" class="level">
            <img src="../assets/maps/1.jpg" />
            <span>{{ $t('level', { x: 1 }) }}</span>
         </div>
      </div>
   </div>

   <div class="made-by">Made by AndrejevVE</div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue';

const props = defineProps({ select: Function } as any);
const show = reactive({ levels: false });
const selectMap = (name: string) => props.select(name);
</script>
