import { httpClient } from "../utils/http-client";

const mockyUrl = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

export const getDynamicFilters = (success, error) => httpClient.get(mockyUrl, success, error);