import config from './config';
import parser from './parser';

let pageLoader;

function getYouTubeInitialData(url) {
    return pageLoader.get(url)
        .then((body) => {
            const [,firstSplit] = body.split('window["ytInitialData"] = ', 2);
            const [secondSplit] = firstSplit.split(';', 1);
            return JSON.parse(secondSplit);
        });
}

function parseVideoRenderer({ playlistVideoRenderer }) {
    // Get the title accessibility data, then extract the title, artist, and view count.
    const label = playlistVideoRenderer.title.accessibility.accessibilityData.label;
    const { title, artist, views } = parser.extractFromLabel(label);

    // Get the video length and thumbnail data.
    const length = parseInt(playlistVideoRenderer.lengthSeconds);
    const thumbnail = playlistVideoRenderer.thumbnail.thumbnails[0];

    return {
        title,
        artist,
        views,
        length,
        thumbnail
    };
}

function scrapePlaylist(playlistId) {
    return getYouTubeInitialData(`${config.urls.baseUrl}/playlist?list=${playlistId}`)
        .then((ytInitialData) => {
            const videos = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0]
                .tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer
                .contents[0].playlistVideoListRenderer.contents;
            
            return videos.map((video) => parseVideoRenderer(video));
        });
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
