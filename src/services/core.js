import needle from 'needle';
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
            .then((response) => response.body);
    }
}

export default CoreService
