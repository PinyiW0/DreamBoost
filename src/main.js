import './assets/scss/all.scss';
import Popper from 'vue3-popper';
import * as bootstrap from 'bootstrap';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { register } from 'swiper/element/bundle';

import mitt from 'mitt';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  const tempStore = store;
  tempStore.$router = markRaw(router);
  tempStore.$http = markRaw(axios);
});

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(LoadingPlugin);
app.use(register);
app.use(Popper);
app.config.globalProperties.$mitt = mitt();
app.config.globalProperties.$bs = bootstrap;

app.mount('#app');
