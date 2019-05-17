import { pipe, prop } from 'ramda';

const baseCategories = prop('categories');

export const baseCategoriesData = pipe(baseCategories, prop('data'));

export const categories = pipe(baseCategoriesData, prop('categories'));

export const categoriesItems = pipe(categories, prop('items'));