import { CoreService, EventType } from 'machete-core'

const CoreDataPlugin = {
  install(Vue) {
    // Define an observable object so that each property is reactive
    const observable = Vue.observable({
      metadata: {},
      state: 0,
      timestamp: 0,
    })

    // When the Core Service emits a data-related events, update our reactive
    // observable object
    CoreService.on(EventType.SONG_METADATA, (metadata) => observable.metadata = metadata)
    CoreService.on(EventType.PLAYBACK_STATE, (state) => observable.state = state)
    CoreService.on(EventType.PLAYBACK_TIMESTAMP, (timestamp) => observable.timestamp = timestamp)

    // Expose the observable object to every component
    Vue.prototype.$coreData = observable
  }
}

export default CoreDataPlugin
