import {EventType, ItemType, QueryType, StateType} from 'machete-core';
import {EventBus, Queue} from './utils';

/**
 * Handles changes to the playback state. If the current item is finished,
 * advances to the next one in the queue.
 * @param {StateType} state The current playback state.
 */
function onPlaybackState(state) {
  if (state === StateType.FINISHED) {
    Playback.next();
  }
}

/**
 * Plays an item from the queue, offset by `delta`.
 * @param {Number} delta The number of items to move by.
 */
function playFromQueue(delta) {
  // Get the next item in the queue, offset by `delta`.
  const item = Queue.get(delta);

  if (item) {
    // If we can, play it.
    playFromItem(item);
  } else {
    // Otherwise, the queue is empty.
    Playback.stop(true);
  }
}

/**
 * Plays an item with its respective service.
 * @param {Item} item The item to play.
 */
function playFromItem(item) {
  // If another service is playing, stop it.
  Playback.stop(false);

  // Broadcast that we're loading the next item.
  EventBus.dispatch(EventType.PLAYBACK_STATE, StateType.LOADING);

  // Reset the timestamp to keep it from "jumping".
  EventBus.dispatch(EventType.PLAYBACK_TIMESTAMP, 0);

  // Find the new service to use for this item.
  const [slug, id] = item.uri.split('://');
  Playback.activeService = Playback.services[slug];

  if (item.type === ItemType.PLAYLIST) {
    // Broadcast this playlist.
    EventBus.dispatch(EventType.CURRENT_PLAYLIST, item);

    // Queue the playlist items individually.
    Playback.activeService.get(QueryType.PLAYLIST, {id})
        .then((result) => {
          Playback.queue(result.items);
          Playback.play(0);
        });
  } else {
    // Play the new item directly.
    Playback.activeService.play(item);
  }
}

export const Playback = {
  init(services) {
    this.activeService = null;
    this.services = services;

    Queue.init();
    EventBus.on(EventType.PLAYBACK_STATE, onPlaybackState);
  },

  reset() {
    Queue.reset();
    EventBus.dispatch(EventType.CURRENT_SONG, {});
    EventBus.dispatch(EventType.CURRENT_PLAYLIST, {});
    EventBus.dispatch(EventType.PLAYBACK_STATE, StateType.STOPPED);
    EventBus.dispatch(EventType.PLAYBACK_TIMESTAMP, 0);
  },

  queue(items, toFront = false) {
    Queue.add(items, toFront);
  },

  play(item) {
    switch (typeof item) {
      case 'number':
        // Move the queue to the given position and play from there.
        item = Queue.set(item);
      case 'object':
        // Fall-through from above.
        playFromItem(item);
        return;
      default:
        // Otherwise, play the current track.
        if (this.activeService) {
          this.activeService.play();
        }
    }
  },

  pause() {
    if (this.activeService) {
      this.activeService.pause();
    }
  },

  stop(reset = true) {
    if (this.activeService) {
      this.activeService.stop();
      this.activeService = null;
    }

    if (reset) {
      this.reset();
    }
  },

  next() {
    playFromQueue(1);
  },

  previous() {
    playFromQueue(-1);
  },

  seekTo(timestamp) {
    if (this.activeService) {
      this.activeService.seekTo(timestamp);
    }
  },

  setVolume(volume) {
    if (this.activeService) {
      this.activeService.setVolume(volume);
    }
  },
};
