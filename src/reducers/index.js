import alert from './alert';
import auth from './auth';
import categories from './categories';
import categoryPlaylist from './categoryPlaylist';
import { combineReducers } from 'redux';
import dynamicFilter from './dynamicFilter';
import manageModal from './modalDetails';
import newReleaseList from './newRelease';
import playlistTracks from './playlistTracks';
import playlistTrending from './trendingReducer';
import searchTracks from './searchTracks';

const spotifoodApp = combineReducers({
  playlistTrending,  
  auth,
  newReleaseList,
  manageModal,
  playlistTracks,
  searchTracks,
  categories,
  categoryPlaylist,
  alert,
  dynamicFilter
});

export default spotifoodApp;