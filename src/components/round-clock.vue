<template>
   <div class="clock" :class="{ clickable: state.roundState === RoundState.Buying }" v-on:click="nextRound()">
      <button v-if="state.roundState === RoundState.Buying">Enter</button>
      <div :class="'clock-inner time-' + (state.round > 0 ? state.roundStage : '')">
         <div></div>
         <img class="t3" src="../assets/images/resources/t3.png" />
         <div></div>
         <img class="t2" src="../assets/images/resources/t2.png" />
         <div></div>
         <img class="t0" src="../assets/images/resources/t0.png" />
         <div></div>
         <img class="t1" src="../assets/images/resources/t1.png" />
         <div></div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue';
import GameState from './models/game-state';
import { RoundState } from './models/round-state';
import Spot from './models/spot';

const props = defineProps({ nextRound: Function, animating: false, state: GameState } as any);
</script>
