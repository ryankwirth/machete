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

    return { title, artist }
  },

  parseTimestamp(timestamp) {
    return timestamp
  }
}

export default Utils
