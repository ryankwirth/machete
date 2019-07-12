import Vue from 'vue';

export const favouriteSong = ({songs}, song) => {
  Vue.set(songs, song.uri, song);
};

export const unfavouriteSong = ({songs}, song) => {
  Vue.delete(songs, song.uri);
};
