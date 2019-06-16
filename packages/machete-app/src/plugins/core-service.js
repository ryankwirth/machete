import CoreService from 'machete-core'

// Avoid CORS issues
const proxy = 'https://machete-proxy.herokuapp.com/'

const CoreServicePlugin = {
  install(Vue) {
    // Initialize the service first
    CoreService.init({ proxy })

    // Make the service available to every component
    Vue.prototype.$coreService = CoreService
  }
}

export default CoreServicePlugin
