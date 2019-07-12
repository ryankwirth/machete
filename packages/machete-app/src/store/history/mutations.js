/**
 * Inserts the given item at the start of the array, removing any items with
 * duplicate `uri` properties.
 * @param {Array<Item>} array The array to insert into.
 * @param {Item} item The playback item to insert.
 * @return {Array<Item>} The newly modified array.
 */
function insertIntoArray(array, item) {
  const newArray = array.filter((element) => element.uri !== item.uri);
  newArray.unshift(item);
  return newArray;
}

export const listenToPlaylist = (state, playlist) => {
  state.playlists = insertIntoArray(state.playlists, playlist);
};

export const listenToSong = (state, song) => {
  state.songs = insertIntoArray(state.songs, song);
};
