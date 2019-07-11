export const isFavourited = ({ songs }) => (song) => {
    return songs.hasOwnProperty(song.uri)
}
