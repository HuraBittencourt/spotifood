import { ACCESS_TOKEN, EXPIRATION_TOKEN } from './constants/base';

export const authenticate = () => {
    var vars = {};
    window.location.hash.substr(1).replace(/([^&;=]+)=?([^&;]*)/g, (m, key, value) => {
        vars[key] = value;
    });
    console.log(vars)
    if (vars.access_token) {
        try {
            localStorage.setItem(ACCESS_TOKEN, vars.access_token);
            localStorage.setItem(EXPIRATION_TOKEN, (Date.now() + parseInt(vars.expires_in, 10)));
            return true;
            
        } catch(err) {
            console.log(err);
        }
    }

    return false;
}

export const isAuthenticated = () => {
    return (getAccessToken === null ? false : true) && !isExpiratedToken;  
} 

export const getAccessToken = localStorage.getItem(ACCESS_TOKEN);

export const isExpiratedToken = localStorage.getItem(EXPIRATION_TOKEN) > Date.now();