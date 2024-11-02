<template>
   <svg class="die" width="60" height="60" version="1.1" xmlns="http://www.w3.org/3000/svg" :class="{ animating: animating }">
      <rect x="2" y="2" rx="10" ry="10" width="56" height="56" stroke="black" fill="#fff9" stroke-width="2" />
      <circle cx="15" cy="15" v-if="value > 3" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="15" cy="30" v-if="value > 5" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="15" cy="45" v-if="value > 1" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="45" cy="15" v-if="value > 1" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="45" cy="30" v-if="value > 5" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="45" cy="45" v-if="value > 3" r="4" stroke="black" fill="#383d30" stroke-width="2" />
      <circle cx="30" cy="30" v-if="value % 2 === 1" r="4" stroke="black" fill="#383d30" stroke-width="2" />
   </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({ animating: true, value: 6 });
</script>
