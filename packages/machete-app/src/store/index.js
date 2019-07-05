import Vue from 'vue'
import Vuex from 'vuex'
import history from './history'

Vue.use(Vuex)

// Construct a new Vuex Store instance.
export default new Vuex.Store({
  modules: {
    history
  }
})
