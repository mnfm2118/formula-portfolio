import Vue from 'vue';
import Vuetify from 'vuetify';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from './App.vue';
// import EditJs from './components/EditJs.vue'
import router from './router';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(PiniaVuePlugin);
Vue.config.devtools = true;

const pinia = createPinia();

new Vue({
  vuetify: new Vuetify(),
  router,
  pinia,

  // render: h => h(EditJs),
  render: (h) => h(App),
}).$mount('#app');
