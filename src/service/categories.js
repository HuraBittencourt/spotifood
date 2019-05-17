import { BASE_URL_API } from "../constants/base";
import { httpClient } from "../utils/http-client";

export const categories = (success, error) => httpClient.get(`${BASE_URL_API}/browse/categories`, success, error);