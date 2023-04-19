
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginRegister from '@/components/LoginRegister' //①import


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
      path: '/LoginRegister',
      name: 'LoginRegister',
      component: LoginRegister
    }
  ]
})
