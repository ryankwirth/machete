const Utils = {
    extractFromLabel: function(label, title = '', artist = '', views = 0) {
        const [ attribution, details ] = label.split(' by ', 2);

        // First, attempt to extract the title/artist information
        const standardFormatMatch = attribution.match(/^(.+) - (.+)/);
        if (standardFormatMatch) {
            artist = standardFormatMatch[1];
            title = standardFormatMatch[2];
        } else {
            title = attribution;
        }

        // Now, parse the view count
        const viewMatch = details.match(/([\d,]+) views/);
        if (viewMatch) {
            views = parseInt(viewMatch[1].replace(/,/g, ''));
        }

        return { title, artist, views };
    }
}

export default Utils;
