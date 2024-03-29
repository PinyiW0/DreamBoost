import './assets/scss/all.scss';
import Popper from 'vue3-popper';
import * as bootstrap from 'bootstrap';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Vue3Marquee from 'vue3-marquee';
import countTo from 'vue3-count-to';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  const tempStore = store;
  tempStore.$router = markRaw(router);
  tempStore.$route = markRaw(router.currentRoute);
  tempStore.$http = markRaw(axios);
});

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.use(register);
app.component(Swiper, SwiperSlide);
app.use(Vue3Marquee);
app.use(Popper);
app.use(countTo);
app.config.globalProperties.$bs = bootstrap;

app.mount('#app');
