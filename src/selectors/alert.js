import { pipe, prop } from 'ramda';

const baseAlert = prop('alert');

export const baseAlertError = pipe(baseAlert, prop('error'));

export const messageAlertError = pipe(baseAlertError, prop('message'))