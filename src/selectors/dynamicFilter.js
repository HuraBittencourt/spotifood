import { pipe, prop } from 'ramda';

export const baseDynamicFilter = prop('dynamicFilter');

export const baseDynamicFilterData = pipe(baseDynamicFilter, prop('data'));

export const dynamicFilterSelector = pipe(baseDynamicFilterData, prop('filters'));