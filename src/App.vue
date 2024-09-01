<style lang="scss">
@import '@/assets/main.scss';
</style>

<template>
   <div class="locales">
      <div>🌐</div>
      <select @change="(x) => changeLocale(x.target!)">
         <option value="en" :selected="localeManager.current === 'en'">English</option>
         <option value="ru" :selected="localeManager.current === 'ru'">Русский</option>
      </select>
   </div>
   <field-view />
</template>

<script lang="ts" setup>
import FieldView from './components/field-view.vue';
import LocaleManager from './storage/locale.manager';

const localeManager = new LocaleManager();
const changeLocale = (target: EventTarget) => localeManager.setLocale((target as HTMLSelectElement).value);
</script>
