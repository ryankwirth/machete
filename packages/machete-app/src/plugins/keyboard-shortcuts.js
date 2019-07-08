import {CoreService, StateType} from 'machete-core'
import hotkeys from 'hotkeys-js'

function togglePlayback($coreData) {
  if ($coreData.state === StateType.PLAYING) {
    CoreService.pause()
  } else {
    CoreService.play()
  }
}

export const KeyboardShortcutsPlugin = {
  install({ $coreData }) {
    // When the spacebar is tapped, toggle the play/paused state.
    hotkeys('space', (e) => {
      e.preventDefault()
      togglePlayback($coreData)
    })
  }
}
