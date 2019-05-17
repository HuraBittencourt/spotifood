import { applyMiddleware, createStore } from 'redux';

import spotifoodApp from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => { 
    const store = createStore(spotifoodApp, applyMiddleware(thunk));
    return store;
}

export default configureStore;