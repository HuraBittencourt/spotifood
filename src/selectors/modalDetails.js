import { pipe, prop } from 'ramda';

const baseModalDetails = prop('manageModal');

export const modalDetailsStateSelector = pipe(baseModalDetails, prop('showModal'));