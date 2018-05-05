import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import  actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: 0,
  history: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
