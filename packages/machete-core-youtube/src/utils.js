import config from './config'

const Utils = {
  encodeUri(id) {
    return id && `${config.slug}://${id}`
  },

  decodeUri(uri) {
    return uri && uri.split('://')[1]
  },

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
    artist = artist.replace(/ - Topic$/, '')

    // Format any "feat" or "ft" tags as "ft."
    title = title.replace(/(feat|ft)\.?/i, 'ft.')
    artist = artist.replace(/(feat|ft)\.?/i, 'ft.')

    // Move any "ft." tags in the title to the artist
    title = title.replace(/ \(?(ft\. [^)]+)\)?/, (match) => {
      artist += match
      return ''
    })

    return { title, artist }
  },

  parseTimestamp(timestamp) {
    return timestamp
  }
}

export default Utils
