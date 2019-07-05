import config from './config';

const SpotifyService = {
  init(/* injectable */) {
    return Promise.resolve(config.slug);
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
