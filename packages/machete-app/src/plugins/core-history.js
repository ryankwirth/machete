import { CoreService, EventType } from 'machete-core'
import store from '@/store'

let previousPlaylist = {}
let previousSong = {}

function onCurrentPlaylist(playlist) {
  if (playlist.uri && playlist.uri !== previousPlaylist.uri) {
    previousPlaylist = playlist
    store.dispatch('history/listenToPlaylist', playlist)
  }
}

function onCurrentSong(song) {
  if (song.uri && song.uri !== previousSong.uri) {
    previousSong = song
    store.dispatch('history/listenToSong', song)
  }
}

export const CoreHistoryPlugin = {
  install() {
    // When the current song/playlist changes, dispatch an action to the store.
    CoreService.on(EventType.CURRENT_PLAYLIST, onCurrentPlaylist)
    CoreService.on(EventType.CURRENT_SONG, onCurrentSong)
  }
}
