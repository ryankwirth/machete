import {CoreService, StateType} from 'machete-core'
import hotkeys from 'hotkeys-js'

function togglePlayback(Vue) {
  if (Vue.prototype.$coreData.state === StateType.PLAYING) {
    CoreService.pause()
  } else {
    CoreService.play()
  }
}

export const KeyboardShortcutsPlugin = {
  install(Vue) {
    // When the spacebar is tapped, toggle the play/paused state.
    hotkeys('space', (e) => {
      e.preventDefault()
      togglePlayback(Vue)
    })
  }
}
