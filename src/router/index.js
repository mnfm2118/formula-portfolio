
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import SingIn from '../components/SingIn.vue' //①import
import SingOut from '../components/SingOut.vue'
import SingUp from '../components/SingUp.vue'
// import EditJs from '../componets/EditJs.vue'
import PdfExport from '../components/PdfExport.vue'
import HelpPage from '../components/HelpPage.vue'


Vue.use(Router)

export default new Router({
mode: 'history',

  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld
    },

//②profile
   {
      path: '/sing_in',
      name: 'SingIn',
      component: SingIn
    },

    {
      path: '/sing_out',
      name: 'SingOut',
      component: SingOut
    },

    {
      path: '/sing_up',
      name: 'SingUp',
      component: SingUp
    },

    // {
    //     path: '/EditJs',
    //     name: 'EditJs',
    //     component: EditJs
    // },

    {
        path: '/pdf_export',
        name: 'PdfExport',
        component: PdfExport
    },

    {
        path: '/help',
        name: 'HelpPage',
        component: HelpPage
    }
  ]
})
