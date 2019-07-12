import {CoreService, EventType} from 'machete-core';
import store from '@/store';

let previousPlaylist = {};
let previousSong = {};

/**
 * Invoked when the current playlist changes. Dispatches `listenToPlaylist`
 * actions to the history module.
 * @param {Item} playlist The newly playing playlist item.
 */
function onCurrentPlaylist(playlist) {
  if (playlist.uri && playlist.uri !== previousPlaylist.uri) {
    previousPlaylist = playlist;
    store.dispatch('history/listenToPlaylist', playlist);
  }
}

/**
 * Invoked when the current song changes. Dispatches `listenToSong` actions
 * to the history module.
 * @param {Item} song The newly playing song item.
 */
function onCurrentSong(song) {
  if (song.uri && song.uri !== previousSong.uri) {
    previousSong = song;
    store.dispatch('history/listenToSong', song);
  }
}

export const CoreHistoryPlugin = {
  install() {
    // When the current song/playlist changes, dispatch an action to the store.
    CoreService.on(EventType.CURRENT_PLAYLIST, onCurrentPlaylist);
    CoreService.on(EventType.CURRENT_SONG, onCurrentSong);
  },
};
