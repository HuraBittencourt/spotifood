import { pipe, prop, slice } from 'ramda';

import { createSelector } from 'reselect';

const basePlaylistTrack = prop('playlistTracks');

const basePlaylistTrackData = pipe(basePlaylistTrack, prop('data'));

export const playlistTrackNext = pipe(basePlaylistTrackData, prop('next'));

export const playlistTrackLimit = pipe(basePlaylistTrackData, prop('limit'));

const playlistTrackOffset = pipe(basePlaylistTrackData, prop('offset'));

export const playlistTrackItemsSelector = pipe(basePlaylistTrackData, prop('items'));

export const tracksSelector = pipe(playlistTrackItemsSelector, prop('track'));