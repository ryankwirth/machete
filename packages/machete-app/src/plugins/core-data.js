import { CoreService, EventType } from 'machete-core'

const CoreDataPlugin = {
  install(Vue) {
    // Define an observable object so that each property is reactive
    const observable = Vue.observable({
      metadata: {},
      status: {},
      timestamp: 0,
    })

    // When the Core Service emits a data-related events, update our reactive
    // observable object
    CoreService.on(EventType.METADATA, (metadata) => observable.metadata = metadata)
    CoreService.on(EventType.STATUS, (status) => observable.status = status)
    CoreService.on(EventType.TIMESTAMP, (timestamp) => observable.timestamp = timestamp)

    // Expose the observable object to every component
    Vue.prototype.$coreData = observable
  }
}

export default CoreDataPlugin
