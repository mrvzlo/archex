import { createApp } from 'vue';
import app from './app.vue';
import i18n from './i18n';

createApp(app).use(i18n).mount('#app');
if (process.env.NODE_ENV === 'production') document.addEventListener('contextmenu', (event) => event.preventDefault());
window.ondragstart = () => false;
