export const setCurrentPlaylist = ({commit}, playlist) => {
  commit('setCurrentPlaylist', playlist);
};

export const setCurrentQueue = ({commit}, queue) => {
  commit('setCurrentQueue', queue);
};

export const setCurrentSong = ({commit}, song) => {
  commit('setCurrentSong', song);
};

export const setCurrentTimestamp = ({commit}, timestamp) => {
  // Only commit a mutation every 10 seconds.
  if (Math.floor(timestamp) % 10 === 0) {
    commit('setCurrentTimestamp', timestamp);
  }
};
