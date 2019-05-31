import config from './config';
import utils from './utils';

let pageLoader;

function parseVideo($, el) {
    // Get the label data and extract title/artist information
    const label = $(el).find('.pl-video-title-link').text();
    const { title, artist } = utils.extractFromLabel(label.trim());

    // Extract the other pieces of data we need
    const id = $(el).data('video-id');
    const owner = $(el).find('.pl-video-owner a').text();
    const thumbnail = $(el).find('img').data('thumb');
    const length = $(el).find('.timestamp').text();

    return {
        id,
        title,
        artist,
        owner,
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
