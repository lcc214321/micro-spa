import test from '../view/test.vue';
import testChild from '../view/test-child1.vue';

const testRoutes = [{
  path: '/test',
  component: test,
  children: [{
    path: '1',
    // component: () => import('../view/test-child1.vue')
    component: testChild
  }]
}];

export default testRoutes;
