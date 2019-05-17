import './categoryPlaylist.scss';

import { compose, lifecycle, withHandlers } from 'recompose';

import React from 'react';
import { categoryPlaylistSelector } from '../selectors/categoryPlaylist';
import { connect } from 'react-redux';
import { getCategoryPlaylist } from '../actions/categoryPlaylist';

const componentClassName = 'category-playlist';

const enhance = compose (
    connect(
        state => ({
            categoryPlaylist: categoryPlaylistSelector(state)
        }),
        dispatch => ({
            getCategoryPlaylist: categoryId => dispatch(getCategoryPlaylist(categoryId))
        })
    ),
    withHandlers({
        redirecToSpotify: () => urlToRedirect => () => window.open(urlToRedirect, '_blank')
    }),
    lifecycle({
        componentDidMount() {
            console.log("Aloooot",this.props.categoryPlaylist)
            this.props.getCategoryPlaylist(this.props.category)
        }
    })
)

const CategoryPlaylist = ({ categoryPlaylist, redirecToSpotify, category }) => (
    <div className={componentClassName}>
        <h2 className={`${componentClassName}__title`}>{category}</h2>
    
        {categoryPlaylist !== undefined && (
            <div className={`${componentClassName}__playlists`}>
                {categoryPlaylist.items.map(playlist => (
                    <div className={`${componentClassName}__playlist`} key={playlist.id} onClick={redirecToSpotify(playlist.external_urls.spotify)}>
                        <img src={playlist.images[0].url} />
                        <p className={`${componentClassName}__name`}>{playlist.name}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
)

export default enhance(CategoryPlaylist);
