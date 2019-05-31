import needle from 'needle';
import cheerio from 'cheerio';
import YouTubeService from './youtube';

const CoreService = {
    init: function() {
        // Initialize the YouTube service.
        YouTubeService.init(PageLoader);

        return Promise.resolve();
    },

    getMostPopular: function() {
        return YouTubeService.getMostPopular();
    }
}

const PageLoader = {
    get: function(url, options) {
        return needle('get', url, options)
            .then((response) => response.body)
            .then((body) => cheerio.load(body));
    }
}

export default CoreService
