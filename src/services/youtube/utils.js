const Utils = {
  parseLabel(title, artist = '') {
    // Strip any "(Official ...)" or otherwise extraneous subtitles
    title = title.replace(/ (\(|\[)(?!feat|ft|Remix).+(\)|\])/g, '')

    // Attempt to extract the title/artist information
    const standardFormatMatch = title.match(/^(.+) - (.+)/)
    if (standardFormatMatch) {
      artist = standardFormatMatch[1]
      title = standardFormatMatch[2]
    }

    // Clean up any extra symbols
    title = title.replace(/(^")|("$)/g, '')

    // Format any "feat" or "ft" tags as "ft."
    artist = artist.replace(/(feat|ft)\.?/i, 'ft.')

    return { title, artist }
  },

  parseTimestamp(timestamp) {
    return timestamp
  }
}

export default Utils
