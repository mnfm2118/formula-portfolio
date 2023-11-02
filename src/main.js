import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
// import EditJs from './components/EditJs.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import { createPinia, PiniaVuePlugin } from 'pinia';


Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  vuetify : new Vuetify(),
  router,
  pinia,

  //render: h => h(EditJs),
  render: h => h(App)
}).$mount('#app')
