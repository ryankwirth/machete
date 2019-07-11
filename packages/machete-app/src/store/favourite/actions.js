export const favouriteSong = ({ commit }, song) => {
  commit('favouriteSong', song)
}

export const unfavouriteSong = ({ commit }, song) => {
  commit('unfavouriteSong', song)
}
