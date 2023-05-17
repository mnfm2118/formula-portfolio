import Vue from 'vue'
import App from './App.vue'
// import EditJs from './components/EditJs.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  //render: h => h(EditJs),
  render: h => h(App),
}).$mount('#app')
