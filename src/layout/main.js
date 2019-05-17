import './main.scss';

import React, { Component } from 'react';

import Alert from './alert';
import CategoryPlaylist from './categoryPlaylist';
import FeaturedPlaylists from './featuredPlaylists';
import Header from './header';
import ModalDetails from './modalDetails';
import NewReleases from './newReleases';
import SearchTracks from './searchTracks';
import { categoriesItems } from '../selectors/categories';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { dynamicFilter } from '../actions/dynamicFilter';
import { dynamicFilterSelector } from '../selectors/dynamicFilter';
import { featuredPlaylist } from '../actions/featuredPlaylist';
import { getCategories } from '../actions/categories';
import { getFeaturedPlaylistItemsSelector } from '../selectors/featuredPlaylist';
import { modalDetailsStateSelector } from '../selectors/modalDetails';
import { newReleaseList } from '../actions/newRelease';
import { newReleasesAlbumsItemsSelector } from '../selectors/newRelease';
import { openModalDetails } from '../actions/modalDetails';

// @connect(
//   state => ({
//     trendingValues: this.state
//   }),
//   (dispatch) => ({
//     getTrendings: () => dispatch(getPlaylistTrending())
//   })
// )

const componentClassName = 'main';

const mapStateToProps = state => ({
  trendingValues: getFeaturedPlaylistItemsSelector(state),
  newReleases: newReleasesAlbumsItemsSelector(state),
  modalDetailsState: modalDetailsStateSelector(state),
  categories: categoriesItems(state),
  dynamicFilter: dynamicFilterSelector(state)
})

const mapDispatchToProps = dispatch => ({
  getTrendings: (query) => {
    console.log(query)
    dispatch(featuredPlaylist(query))
  },
  getNewReleaseList: () => dispatch(newReleaseList()),
  openModalDetails: modalDetailsState => dispatch(openModalDetails(modalDetailsState)),
  getCategories: () => dispatch(getCategories()),
  getDynamicFilters: () => dispatch(dynamicFilter())
})

class Main extends Component {

  state = {
    modalId: '',
    search: [],
    filtering: false,
    filteredItems: [],
    category: 'toplists',
    queryFilter: ''
  }

  componentDidMount() {
    this.props.getNewReleaseList();
    this.props.getTrendings();
    this.props.getCategories();
    this.fillSearchState();
    this.props.getDynamicFilters();
  }

  fillSearchState = () => {

    setTimeout(() => {
      let newSearch = this.props.trendingValues.concat(this.props.newReleases);
    
      this.setState({
        ...this.state,
        search: newSearch
      })

    }, 4000)
  }


  handleOpenModal = playlistTrackModalId => {
    this.setState({
      ...this.state,
      modalId: playlistTrackModalId
    })  

    this.props.openModalDetails(this.props.modalDetailsState);
  }

  handleSearchOnChange = (event) => {
    let inputValue = event.target.value;
    setTimeout(() => {
      if (inputValue === '') {
          this.setState({
            ...this.state,
            filtering: false
          })
      } else {
        this.setState({
          ...this.state,
          filtering: true,
          filteredItems: this.getSearchedItems(inputValue)
        })
      }
    }, 500)
  }

  getSearchedItems = (input) => {
    const search = this.state.search;

    let newValue = search.filter(val => val.name.includes(input))

    return newValue;
  }

  handleSelectCategory = typeCategory => () => {
    this.setState({
      ...this.state,
      category: typeCategory
    })
  }

  handleFiltersDropdownOnChange = idQuery => (event, obj) => {
    if (typeof event !== 'string') {
      console.log()
      idQuery === 'timestamp' ?
        event = new Date(event.target.value).toISOString() :
        event = event.target.value
    }
    const query = event !== "" ? `${idQuery}=${event}` : "";

    console.log({idQuery});
    console.log({event});
    console.log({obj});

    this.updateStateQueryFilter(query, idQuery);
  }

  updateStateQueryFilter = (query, idQuery) => {
    const { getTrendings } = this.props;

    let updatedQueryFilter;

    if (this.state.queryFilter !== '') {
      if (this.state.queryFilter.includes(idQuery)) {
        updatedQueryFilter = this.state.queryFilter.replace(eval(`/${idQuery}[^&|$]*/`).exec(this.state.queryFilter)[0], query)
      } else {
        updatedQueryFilter = `${this.state.queryFilter}&${query}`
      }
    } else {
      updatedQueryFilter = `${this.state.queryFilter}${query}`
    }

    this.setState({
      ...this.state,
      queryFilter: updatedQueryFilter
    }, () => getTrendings(this.state.queryFilter))
  }

  
  render() {
    const { trendingValues, newReleases, modalDetailsState, categories, dynamicFilter } = this.props;
    const { modalId, filtering, category, filteredItems } = this.state;
    
    return (
      <div className={componentClassName}>
        {modalDetailsState && (
          <ModalDetails modalId={modalId}/>
        )}
        <Header className={`${componentClassName}__header`} 
          handleSearchOnChange={this.handleSearchOnChange} 
          handleSelectCategory={this.handleSelectCategory} 
          categories={categories}
          dynamicFilter={dynamicFilter}
          dropdownOnChange={this.handleFiltersDropdownOnChange}/>
        {filtering && (
          <div>
            <SearchTracks filteredItems={filteredItems} />
          </div>
        )}
        {!filtering && (
          <div>
            {category !== 'toplists' && (
              <div className={`${componentClassName}__category-playlist`}>
                <CategoryPlaylist category={category}/>
              </div>
            )}
            {category === 'toplists' && (
              <div>
                <h2 className={`${componentClassName}__title`}>Featured Playlist</h2>
                <FeaturedPlaylists featuredPlaylistsItems={trendingValues} openModalDetails={this.handleOpenModal} />
        
                <h2 className={`${componentClassName}__title`}>New Release</h2>
                <span className={`${componentClassName}__open-on-spotify`}>Open on Spotify</span>
                <NewReleases releases={newReleases} />
              </div>
            )}
            </div>
            )}
            <div>
              <Alert />
            </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
