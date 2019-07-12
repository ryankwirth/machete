import {Playback} from './playback';
import {EventBus, Injectable} from './utils';

export const CoreService = {
  init(services, options) {
    EventBus.init();
    Injectable.init(options);

    // Initialize all of the specified services.
    const promises = services.map((service) => service.init(Injectable));
    return Promise.all(promises)
        .then((slugs) => {
        // Map each service's slug to its instance.
        // (eg. { "youtube": YouTubeService})
          this.services = slugs.reduce((obj, slug, i) => {
            obj[slug] = services[i];
            return obj;
          }, {});

          Playback.init(this.services);
        });
  },

  queue(items, toFront, newIndex) {
    Playback.queue(items, toFront, newIndex);
  },

  play(item, timestamp) {
    Playback.play(item, timestamp);
  },

  pause() {
    Playback.pause();
  },

  stop() {
    Playback.stop();
  },

  next() {
    Playback.next();
  },

  previous() {
    Playback.previous();
  },

  seekTo(timestamp) {
    Playback.seekTo(timestamp);
  },

  setVolume(volume) {
    Playback.setVolume(volume);
  },

  get(type, options) {
    // Call `get` on each registered service.
    const promises = Object.values(this.services)
        .map((service) => service.get(type, options));

    // Wait for all of the services to provide their results, then merge them.
    return Promise.all(promises)
        .then((results) => results.flat());
  },

  on(type, callback) {
    EventBus.on(type, callback);
  },

  off(type, callback) {
    EventBus.off(type, callback);
  },
};
