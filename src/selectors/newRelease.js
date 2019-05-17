import { pipe, prop } from 'ramda';

const baseNewReleases = prop('newReleaseList');

const baseNewReleasesData = pipe(baseNewReleases, prop('data'));

export const newReleasesAlbumsSelector = pipe(baseNewReleasesData, prop('albums'));

export const newReleasesAlbumsItemsSelector = pipe(newReleasesAlbumsSelector, prop('items'));