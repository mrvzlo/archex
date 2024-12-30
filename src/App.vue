<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<template>
   <div class="settings">
      <button class="btn-sound" v-on:click="toggleSound()">
         <span v-if="audioManager.on">🔊</span>
         <span v-else>🔈</span>
      </button>
      <div class="locales">
         <div>🌐</div>
         <select @change="(x) => changeLocale(x.target!)">
            <option value="en" :selected="localeManager.current === 'en'">English</option>
            <option value="ru" :selected="localeManager.current === 'ru'">Русский</option>
         </select>
      </div>
      <button class="btn-exit" v-on:click="exit()" :disabled="!map.num">X</button>
   </div>
   <field-view :map="map.num" v-if="map.num" />
   <main-menu v-if="!map.num" :select="selectMap" />
</template>

<script lang="ts" setup>
import { provide, reactive } from 'vue';
import FieldView from './components/field-view.vue';
import MainMenu from './components/main-menu.vue';
import AudioManager from './components/managers/audio.manager';
import CardManager from './components/managers/card.manager';
import DrawingManager from './components/managers/drawing.manager';
import LocaleManager from './storage/locale.manager';
import StorageService from './storage/storage.service';

const cardManager = new CardManager();
const storageService = new StorageService();
const localeManager = new LocaleManager();
const drawingManager = new DrawingManager();
const audioManager = reactive(new AudioManager(storageService.getAudio()));

const map = reactive({ num: null as any as string });

provide('CardManager', cardManager);
provide('StorageService', storageService);
provide('LocaleManager', localeManager);
provide('DrawingManager', drawingManager);
provide('AudioManager', audioManager);

const changeLocale = (target: EventTarget) => localeManager.setLocale((target as HTMLSelectElement).value);
const toggleSound = () => {
   audioManager.toggle();
   storageService.setAudio(audioManager.on);
};

const exit = () => (map.num = '');
const selectMap = (x: string) => (map.num = x);
</script>
