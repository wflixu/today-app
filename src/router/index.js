import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import HomeContent from '@/pages/HomeContent';
import MyContent from '@/pages/MyContent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HomeContent
        },
        {
          path: 'home',
          redirect:'/'
        },
        {
          path: 'my',
          component: MyContent
        }
      ]
    }
  ]
});
