import CoreService from 'machete-core'
import YouTubeService from 'machete-core-youtube'

// Define which services we want to use
const services = [ YouTubeService ]

// Avoid CORS issues
const proxy = 'https://machete-proxy.herokuapp.com/'

const CoreServicePlugin = {
  install(Vue) {
    // Initialize the service first
    CoreService.init(services, { proxy })

    // Make the service available to every component
    Vue.prototype.$coreService = CoreService
  }
}

export default CoreServicePlugin
