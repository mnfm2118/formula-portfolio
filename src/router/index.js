
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelpPage from '@/components/HelpPage' //①import
import LoginPage from '@/components/LoginPage'
import MemberRegistration from '@/components/MemberRegistration'
import MyPage from '@/components/MyPage'
import TextEditor from '@/components/TextEditor'


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
      path: '/helppage',
      name: 'HelpPage',
      component: HelpPage
    },

    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },

    {
      path: '/memberregistration',
      name: 'MemberRegistration',
      component: MemberRegistration
    },

    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },

    {
      path: '/texteditor',
      name: 'TextEditor',
      component: TextEditor
    }
  ]
})
