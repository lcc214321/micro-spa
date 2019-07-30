import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../view/home.vue';

Vue.use(VueRouter)

const testRoutes = moduletest.router;
// const homeRoutes = home.router;

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: home
    },
    ...testRoutes,
    // ...homeRoutes
  ]
})

export default router;
