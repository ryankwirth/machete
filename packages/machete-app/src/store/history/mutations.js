function insertIntoArray(array, item) {
  const newArray = array.filter((element) => element.uri !== item.uri)
  newArray.unshift(item)
  return newArray
}

export const listenToPlaylist = (state, playlist) => {
  state.playlists = insertIntoArray(state.playlists, playlist)
}

export const listenToSong = (state, song) => {
  state.songs = insertIntoArray(state.songs, song)
}
