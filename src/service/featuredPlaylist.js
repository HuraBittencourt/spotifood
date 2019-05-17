import { getApi, httpClient } from "../utils/http-client";

import { BASE_URL_API } from "../constants/base";

export const getFeaturedPlaylist = (success, error, query = '') => httpClient.get(`${BASE_URL_API}/browse/featured-playlists?${query}`, success, error);