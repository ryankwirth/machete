import {CoreService, StateType} from 'machete-core';
import hotkeys from 'hotkeys-js';

/**
 * Toggles the playing/paused state of the CoreService.
 * @param {StateType} state The current state of the CoreService.
 */
function togglePlayback(state) {
  if (state === StateType.PLAYING) {
    CoreService.pause();
  } else {
    CoreService.play();
  }
}

export const KeyboardShortcutsPlugin = {
  install({$coreData}) {
    // When the spacebar is tapped, toggle the play/paused state.
    hotkeys('space', (e) => {
      e.preventDefault();
      togglePlayback($coreData.state);
    });
  },
};
