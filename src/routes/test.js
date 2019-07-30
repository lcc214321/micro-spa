// import testChild from '../view/test-child1.vue';

const testRoutes = [{
  path: '/test',
  component: () => import('../view/test.vue'),
  children: [{
    path: 'a',
    component: () => import('../view/test-child1.vue')
    // component: testChild
  }]
}];

export default testRoutes;
