
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import SingIn from './components/SingIn.vue' //①import
import SingOut from './components/SingOut.vue'
import SingUp from './components/SingUp.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

//②profile
   {
      path: '/SingIn',
      name: 'SingIn',
      component: SingIn
    },

    {
      path: '/SingOut',
      name: 'SingOut',
      component: SingOut
    },

    {
      path: '/SingUp',
      name: 'SingUp',
      component: SingUp
    }
  ]
})
