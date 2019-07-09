import {EventType, StateType} from 'machete-core';
import config from './config';
import utils from './utils';

/**
 * Injects the YouTube IFrame API script into the DOM.
 * @return {Promise} A Promise that resolves when the script has loaded.
 */
function injectAPI() {
  return new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = config.urls.iframeApiUrl;
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = resolve;
  });
}

/**
 * Injects a YouTube IFrame Player instance into the DOM.
 * @return {Promise} A Promise that resolves when the player is ready.
 */
function injectPlayer() {
  return new Promise((resolve) => {
    const tag = document.createElement('div');
    tag.id = 'player';
    tag.style = 'position: absolute';
    document.body.appendChild(tag);

    // eslint-disable-next-line no-undef
    Player.player = new YT.Player('player', {
      height: '0',
      width: '0',
      events: {
        onReady: resolve,
        onStateChange,
      },
    });
  });
}

/**
 * Handles state changes in the YouTube Player.
 * @param {Event} e The StateChange event.
 */
function onStateChange(e) {
  // Ensure the video isn't muted; the user can change the volume later.
  if (Player.player.isMuted()) {
    Player.player.unMute();
  }

  dispatchState(e.data);
}

/**
 * Dispatches an updated playback state through the EventBus.
 * @param {Number} status The playback status of the YouTube Player.
 */
function dispatchState(status) {
  switch (status) {
    case 0:
      Player.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.FINISHED);
      break;
    case 1:
      dispatchMetadata();
      Player.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.PLAYING);
      break;
    case 2:
      Player.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.PAUSED);
      break;
    case 3:
      Player.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.LOADING);
      break;
  }
}

/**
 * Dispatches the current song metadata through the EventBus.
 */
function dispatchMetadata() {
  // The only data we can't scrape is the duration; we'll get it from the
  // player, then dispatch it and the current item.
  const duration = Player.player.getDuration();
  const payload = {duration, ...Player.item};
  Player.injectable.dispatch(EventType.CURRENT_SONG, payload);
}

/**
 * Dispatches the current timestamp through the EventBus.
 */
function dispatchTimestamp() {
  const timestamp = Player.player.getCurrentTime();
  Player.injectable.dispatch(EventType.PLAYBACK_TIMESTAMP, timestamp);
}

/**
 * Begins dispatching the current timestamp through the EventBus every 1000ms.
 */
function startTimestampPolling() {
  if (!Player.intervalId) {
    Player.intervalId = setInterval(dispatchTimestamp, 1000);
  }
}

/**
 * Stops dispatching the current timestamp.
 */
function stopTimestampPolling() {
  if (Player.intervalId) {
    clearInterval(Player.intervalId);
    Player.intervalId = null;
  }
}

export const Player = {
  init(injectable) {
    this.injectable = injectable;

    return injectAPI()
        .then(injectPlayer);
  },

  play(item, timestamp) {
    if (item) {
      this.item = item;
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.LOADING);

      // Get the video ID from the slugged URI.
      const videoId = utils.decodeUri(item.uri);
      this.player.loadVideoById(videoId, timestamp);
    } else {
      this.player.playVideo();
    }

    // Start polling for timestamps
    startTimestampPolling();
  },

  pause() {
    this.player.pauseVideo();
    stopTimestampPolling();
  },

  stop() {
    this.item = null;
    this.player.stopVideo();
    stopTimestampPolling();
  },

  seekTo(timestamp) {
    this.player.seekTo(timestamp);
  },

  setVolume(volume) {
    this.player.setVolume(volume);
  },
};
