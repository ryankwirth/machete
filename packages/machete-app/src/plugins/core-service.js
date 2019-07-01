import { CoreService, EventType } from 'machete-core'
import { YouTubeService } from 'machete-core-youtube'

// Define which services we want to use.
const services = [ YouTubeService ]

// Avoid CORS issues
const proxy = 'https://machete-proxy.herokuapp.com/'

const CoreServicePlugin = {
  install() {
    // Initialize the service.
    CoreService.init(services, { proxy })

    // When the song metadata changes, update the document title.
    CoreService.on(EventType.SONG_METADATA, ({ title, subtitle }) => {
      document.title = title ? `${title} - ${subtitle}` : 'Machete'
    })
  }
}

export default CoreServicePlugin
