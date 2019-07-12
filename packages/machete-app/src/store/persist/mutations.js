export const setCurrentPlaylist = (state, playlist) => {
  state.currentPlaylist = playlist;
};

export const setCurrentQueue = (state, queue) => {
  state.currentQueue = queue;
};

export const setCurrentSong = (state, song) => {
  state.currentSong = song;
};

export const setCurrentTimestamp = (state, timestamp) => {
  state.currentTimestamp = timestamp;
};
