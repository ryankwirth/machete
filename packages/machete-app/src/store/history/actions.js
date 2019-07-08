export const listenToPlaylist = ({ commit }, playlist) => {
  commit('listenToPlaylist', playlist)
}

export const listenToSong = ({ commit }, song) => {
  commit('listenToSong', song)
}
