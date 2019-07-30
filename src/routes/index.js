import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../view/home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: home
    },
  ]
})
// router.addRoutes(window.testModule.router);
// let isLoadTest = false;
router.beforeEach((to, from, next) => {
  // console.log(to);
  // if (to.path === '/test' && !isLoadTest) {
  //   console.log('开始加载------------')
  //   var script = document.createElement('script');
  //   script.onload = function () {
  //     console.log('加载完成------------')
  //     isLoadTest = true;

  //     console.log('添加路由------------')
  //     console.log(window.testModule.router)
  //     console.log(router)
  //     next()
  //   }
  //   script.type = 'text/javascript';
  //   script.src = './module-lib/test.main.js';
  //   document.body.appendChild(script);
  // } else {
  //   next()
  // }
  next()
})

export default router;
