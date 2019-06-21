const baseUrl = 'https://www.youtube.com'

export default Object.freeze({
  slug: 'youtube',
  urls: {
    iframeApiUrl: `${baseUrl}/iframe_api`,
    playlistUrl: `${baseUrl}/playlist?list=`,
    searchUrl: `${baseUrl}/results?search_query=`,
    thumbnailUrl: 'https://img.youtube.com/vi/'
  },
  playlistIds: {
    mostPopular: 'PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI'
  }
})
