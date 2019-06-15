import CoreService from 'machete-core'

const CoreServicePlugin = {
  install(Vue) {
    CoreService.init()

    Vue.prototype.$coreService = CoreService
  }
}

export default CoreServicePlugin
