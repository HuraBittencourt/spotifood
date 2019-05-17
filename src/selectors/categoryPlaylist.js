import { pipe, prop } from 'ramda';

const baseCategoryPlaylist = prop('categoryPlaylist');

const baseCategoryPlaylistData = pipe(baseCategoryPlaylist, prop('data'));

export const categoryPlaylistSelector = pipe(baseCategoryPlaylistData, prop('playlists'))