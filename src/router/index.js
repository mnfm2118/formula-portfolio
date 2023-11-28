import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '../components/TopPage.vue';
import SingIn from '../components/SingIn.vue'; // ①import
import SingOut from '../components/SingOut.vue';
import SingUp from '../components/SingUp.vue';
import EditJs from '../components/EditJs.vue';
import PdfExport from '../components/PdfExport.vue';
import HelpPage from '../components/HelpPage.vue';
import SaveData from '../components/SaveData.vue';
import useSessionStore from '../stores/session';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/vue-test/',

  routes: [
    {
      path: '',
      name: 'TopPage',
      component: TopPage,
    },

    // ②profile
    {
      path: '/sing_in',
      name: 'SingIn',
      component: SingIn,
    },

    {
      path: '/sing_out',
      name: 'SingOut',
      component: SingOut,
    },

    {
      path: '/sing_up',
      name: 'SingUp',
      component: SingUp,
    },

    {
      path: '/edit_js',
      name: 'EditJs',
      component: EditJs,
      meta: { requiresAuth: true },
    },

    {
      path: '/pdf_export',
      name: 'PdfExport',
      component: PdfExport,
    },

    {
      path: '/help',
      name: 'HelpPage',
      component: HelpPage,
    },
    {
      path: '/savedata',
      name: 'SaveData',
      component: SaveData,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useSessionStore();
  const requiresAuth = to.matched.some((recode) => recode.meta.requiresAuth);
  if (requiresAuth && !store.isLoggedln) {
    next({ path: '/sing_in', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
