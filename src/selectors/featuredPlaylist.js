import { pipe, prop } from 'ramda';

const baseFeaturedPlaylist = prop('playlistTrending');

const baseFeaturedPlaylistData = pipe(baseFeaturedPlaylist, prop('data'))

export const getFeaturedPlaylistsSelector = pipe(baseFeaturedPlaylistData, prop('playlists'));

export const getFeaturedPlaylistItemsSelector = pipe(getFeaturedPlaylistsSelector, prop('items'));
