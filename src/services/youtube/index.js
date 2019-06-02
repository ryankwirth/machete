import config from './config';
import utils from './utils';

let pageLoader;

function parseVideo($, el) {
    // Get the label data and extract title/artist information
    const label = $(el).find('.pl-video-title-link').text();
    const owner = $(el).find('.pl-video-owner a').text();
    const { title, artist } = utils.parseLabel(label.trim(), owner.trim());

    // Extract the other pieces of data we need
    const id = $(el).data('video-id');
    const thumbnail = $(el).find('img').data('thumb');
    const timestamp = $(el).find('.timestamp').text();
    const length = utils.parseTimestamp(timestamp);

    return {
        id,
        title,
        artist,
        thumbnail,
        length
    };
}

function scrapePlaylist(playlistId) {
    return pageLoader.get(`${config.urls.baseUrl}/playlist?list=${playlistId}`)
        .then(($) => $('tr').map((i, el) => parseVideo($, el)));
}

const YouTubeService = {
    init: function(_pageLoader) {
        pageLoader = _pageLoader;
    },

    getMostPopular: function() {
        return scrapePlaylist(config.playlistIds.mostPopular);
    }
}

export default YouTubeService
