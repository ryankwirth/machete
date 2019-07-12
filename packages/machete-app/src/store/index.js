import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

// Import each module.
import favourite from './favourite';
import history from './history';
import persist from './persist';

// Configure Vue to use Vuex.
Vue.use(Vuex);

// Construct a new VuexPersist instance for saving to localStorage.
const vuexPersist = new VuexPersist();

// Construct a new Vuex Store instance.
export default new Vuex.Store({
  modules: {
    favourite,
    history,
    persist,
  },
  plugins: [
    vuexPersist.plugin,
  ],
});
