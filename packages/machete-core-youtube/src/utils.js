import config from './config';

const Utils = {
  encodeUri(id) {
    return id && `${config.slug}://${id}`;
  },

  decodeUri(uri) {
    return uri && uri.split('://')[1];
  },

  parseLabel(title, subtitle = '') {
    // Strip any "(Official ...)" or otherwise extraneous subtitles.
    title = title.replace(/ (\(|\[)(?!feat|ft|Remix).+(\)|\])/g, '');

    // Attempt to extract the title/subtitle information.
    const standardFormatMatch = title.match(/^(.+) - (.+)/);
    if (standardFormatMatch) {
      subtitle = standardFormatMatch[1];
      title = standardFormatMatch[2];
    }

    // Clean up any extra symbols.
    title = title.replace(/(^")|("$)/g, '');
    subtitle = subtitle.replace(/ - Topic$/, '');

    // Format any "feat" or "ft" tags as "ft."
    title = title.replace(/(feat|ft)\.?/i, 'ft.');
    subtitle = subtitle.replace(/(feat|ft)\.?/i, 'ft.');

    // Move any "ft." tags in the title to the subtitle.
    title = title.replace(/ \(?(ft\. [^)]+)\)?/, (match) => {
      subtitle += match;
      return '';
    });

    return {title, subtitle};
  },

  parseTimestamp(timestamp) {
    return timestamp;
  },
};

export default Utils;
