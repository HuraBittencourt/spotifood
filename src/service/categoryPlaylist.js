import { BASE_URL_API } from "../constants/base";
import { httpClient } from "../utils/http-client";

export const categoryPlaylist = (categoryId, success, error) => httpClient.get(`${BASE_URL_API}/browse/categories/${categoryId}/playlists`, success, error);