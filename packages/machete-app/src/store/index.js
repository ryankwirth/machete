// Construct a new Vuex Store instance.
export const createStore = (Vuex) => (
  new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  })
)
