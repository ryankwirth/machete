const Utils = {
    extractFromLabel: function(title, artist = '') {
        // Attempt to extract the title/artist information
        const standardFormatMatch = title.match(/^(.+) - (.+)/);
        if (standardFormatMatch) {
            artist = standardFormatMatch[1];
            title = standardFormatMatch[2];
        }

        return { title, artist };
    }
}

export default Utils;
