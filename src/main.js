import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
// import EditJs from './components/EditJs.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  vuetify : new Vuetify(),
  router,

  //render: h => h(EditJs),
  render: h => h(App)
}).$mount('#app')
