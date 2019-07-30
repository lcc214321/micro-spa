import Vue from 'vue';
import Vuex from 'vuex';

// import testModule from './test';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userId: 123456
  },
  modules: {}
})

export default store;
