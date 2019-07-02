import { CoreService, EventType, StateType } from 'machete-core'

export const CoreDataPlugin = {
  install(Vue) {
    // Define an observable object so that each property is reactive
    const observable = Vue.observable({
      song: {},
      playlist: {},
      state: StateType.STOPPED,
      timestamp: 0,
    })

    // When the Core Service emits a data-related events, update our reactive
    // observable object
    CoreService.on(EventType.CURRENT_SONG, (song) => observable.song = song)
    CoreService.on(EventType.CURRENT_PLAYLIST, (playlist) => observable.playlist = playlist)
    CoreService.on(EventType.PLAYBACK_STATE, (state) => observable.state = state)
    CoreService.on(EventType.PLAYBACK_TIMESTAMP, (timestamp) => observable.timestamp = timestamp)

    // Expose the observable object to every component
    Vue.prototype.$coreData = observable
  }
}
