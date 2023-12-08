import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '../components/TopPage.vue';
import EditJs from '../components/EditJs.vue';
import PdfExport from '../components/PdfExport.vue';
import HelpPage from '../components/HelpPage.vue';

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
  ],
});

export default router;
