import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations,
  // getters类似于组件中的computed属性，可以避免数据冗余
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
