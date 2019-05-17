import { BASE_URL_API } from "../constants/base";
import { httpClient } from "../utils/http-client";

const defaultValue = 'track'
export const getSearchTracksList = (search, params = defaultValue, success, error) => httpClient.get(`${BASE_URL_API}/search/q${search}&type=${params}`,success, error);