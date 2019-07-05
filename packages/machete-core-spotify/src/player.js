import config from './config';
import SpotifyService from '.';

/**
 * Injects the YouTube IFrame API script into the DOM.
 * @return {Promise} A Promise that resolves when the script has loaded.
 */
function injectAPI() {
  return new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = config.urls.playbackSdkUrl;
    document.body.appendChild(tag);

    window.onSpotifyWebPlaybackSDKReady = resolve;
  });
}

/**
 * Creates a Spotify Player with the Playback SDK.
 * @return {Promise} A Promise that resolves when the player is ready.
 */
function connectPlayer() {
  return new Promise((resolve, reject) => {
    const token = '...'; // TODO
    const player = new Spotify.Player({
      name: config.slug,
      getOAuthToken: (cb) => cb(token),
    });

    player.addListener('ready', resolve);
    player.addListener('not_ready', reject);
  });
}

export const Player = {
  init(injectable) {
    this.injectable = injectable;

    return injectAPI()
        .then(connectPlayer);
  },

  play(/* item */) {
    // TODO
  },

  pause() {
    // TODO
  },

  stop() {
    // TODO
  },

  seekTo(/* timestamp */) {
    // TODO
  },

  setVolume(/* volume */) {
    // TODO
  },
};
