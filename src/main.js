import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from './plugins/primevue';

import './assets/scss/main.scss';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount('#app');
