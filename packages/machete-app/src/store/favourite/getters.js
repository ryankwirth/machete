export const isFavourited = ({songs}) => (song) => {
  return songs.hasOwnProperty(song.uri);
};

export const songs = ({songs}) => Object.values(songs);
