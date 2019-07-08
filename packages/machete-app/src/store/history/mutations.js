export const listenToPlaylist = (state, playlist) => {
  state.playlists.push(playlist)
}

export const listenToSong = (state, song) => {
  state.songs.push(song)
}
