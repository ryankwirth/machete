export const setCurrentPlaylist = ({ commit }, playlist) => {
  commit('setCurrentPlaylist', playlist)
}

export const setCurrentSong = ({ commit }, song) => {
  commit('setCurrentSong', song)
}

export const setCurrentTimestamp = ({ commit }, timestamp) => {
  commit('setCurrentTimestamp', timestamp)
}
