import { BASE_URL_API } from "../constants/base";
import { httpClient } from "../utils/http-client";

const valueParams = '3';

export const getFeaturedPlaylistTracks = (trackId, params = valueParams, success, error) => httpClient.get(`${BASE_URL_API}/playlists/${trackId}/tracks?limit=${params}&offset=1`, success, error);