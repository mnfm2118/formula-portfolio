import Vue from 'vue'
import App from './App.vue'

// import EditJs from './components/EditJs.vue'
import router from './router'

import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,

  //render: h => h(EditJs),
  render: h => h(App)
}).$mount('#app')
