import * as authentication from "../authentication";

import axios from 'axios';

const access_token = authentication.getAccessToken;

const defaultConfig = {
    headers: { 
        Authorization: `Bearer ${access_token}`,
        Accept: `application/json`
    } 
}

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATH: 'PATH'
};

export const httpClient = ({
    get: (url, success, error) => baseRequest(url, HTTP_METHODS.GET, success, error, null),
    put: (url, success, error, data) => baseRequest(url, HTTP_METHODS.PUT, success, error, data)
})

const baseRequest = (url, method, success, error, data, config = defaultConfig) => {
    if (authentication.isExpiratedToken) {
        console.log('Token Expirado!');
        window.location.href = 'http://localhost:3000/login';
    }

    switch (method) {
        case HTTP_METHODS.GET: 

            return fetch(url, {
                method: HTTP_METHODS.GET,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    Accept: 'application/json'
                }
            })
            .then(response => { 
                if (response.status !== 200) {
                    throw new Error("Algo ocorreu errado :( Tente novamente");
                }
                return response.json()
            })
            .then(success)
            .catch(error)

            // axios
            // .get(
            //     url,
            //     config
            // )
            // .then(success)
            // .catch(error)
            break;

        case HTTP_METHODS.PUT:
            fetch(url, {
                method: HTTP_METHODS.PUT,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    Accept: 'application/json'
                },
                body: data
            })
            .then(response => response.json())
            .then(success)
            .catch(error)
            
            // axios
            // .put(
            //     url,
            //     data,
            //     config
            // )
            // .then(success)
            // .catch(error)
            break;
    }
}