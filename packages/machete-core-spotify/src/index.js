import config from './config';
import {Player} from './player';

const SpotifyService = {
  init(injectable) {
    console.log('SpotifyService; init');
    return Promise.all([
      Player.init(injectable),
    ])
        .then(() => config.slug);
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

  get(/* type, options */) {
    return Promise.resolve([]);
  },
};

export default SpotifyService;
