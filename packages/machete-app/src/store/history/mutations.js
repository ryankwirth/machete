export const listenToPlaylist = (state, playlist) => {
  state.playlists.unshift(playlist)
}

export const listenToSong = (state, song) => {
  state.songs.unshift(song)
}
