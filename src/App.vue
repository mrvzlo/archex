<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<template>
   <div class="settings">
      <div class="locales">
         <div>🌐</div>
         <select @change="(x) => changeLocale(x.target!)">
            <option value="en" :selected="localeManager.current === 'en'">English</option>
            <option value="ru" :selected="localeManager.current === 'ru'">Русский</option>
         </select>
      </div>
      <button class="btn-sound" v-on:click="toggleSound()">
         <span v-if="audioManager.on">🔊</span>
         <span v-else>🔈</span>
      </button>
   </div>
   <field-view :audioManager="audioManager" />
</template>

<script lang="ts" setup>
import { provide, reactive } from 'vue';
import FieldView from './components/field-view.vue';
import AudioManager from './components/managers/audio.manager';
import CardManager from './components/managers/card.manager';
import DrawingManager from './components/managers/drawing.manager';
import LocaleManager from './storage/locale.manager';
import StorageService from './storage/storage.service';

const cardManager = new CardManager();
const storageService = new StorageService();
const localeManager = new LocaleManager();
const drawingManager = new DrawingManager();

provide('CardManager', cardManager);
provide('StorageService', storageService);
provide('LocaleManager', localeManager);
provide('DrawingManager', drawingManager);

const audioManager = reactive(new AudioManager(storageService.getAudio()));
const changeLocale = (target: EventTarget) => localeManager.setLocale((target as HTMLSelectElement).value);
const toggleSound = () => {
   audioManager.toggle();
   storageService.setAudio(audioManager.on);
};
</script>
