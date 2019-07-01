import {QueryType} from 'machete-core';
import config from './config';
import parser from './parser';
import {Player} from './player';

const YouTubeService = {
  init(injectable) {
    return Promise.all([
      parser.init(injectable),
      Player.init(injectable),
    ])
        .then(() => config.slug);
  },

  play(item) {
    Player.play(item);
  },

  pause() {
    Player.pause();
  },

  stop() {
    Player.stop();
  },

  seekTo(timestamp) {
    Player.seekTo(timestamp);
  },

  setVolume(volume) {
    Player.setVolume(volume);
  },

  get(type, options) {
    switch (type) {
      case QueryType.SEARCH:
        return parser.search(options);
      case QueryType.SHOWCASE:
        return parser.scrapeShowcase();
      case QueryType.MOST_POPULAR:
        return parser.scrapePlaylist({
          title: 'Most Popular',
          id: config.playlistIds.mostPopular,
        });
      case QueryType.RECENTLY_ISSUED:
        return parser.scrapePlaylist({
          title: 'Recently Issued',
          id: config.playlistIds.recentlyIssued,
        });
      case QueryType.PLAYLIST:
        return parser.scrapePlaylist(options);
    }
  },
};

export default YouTubeService;
