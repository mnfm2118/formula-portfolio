import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMathjax from 'vue-mathjax';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.config.devtools = true;
Vue.use(VueMathjax);

new Vue({
  vuetify: new Vuetify(),
  router,

  render: (h) => h(App),
}).$mount('#app');
