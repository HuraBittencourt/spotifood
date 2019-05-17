import './featuredPlaylist.scss';

import { compose, withHandlers, withProps } from 'recompose';

import { Image } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { getPlaylistTracks } from '../actions/playlistTracks';
import { pick } from 'ramda';

const componentClassName = 'featured-playlist';

const enhance = compose(
    connect(null, dispatch => ({
        getPlaylistTracks: trackId => dispatch(getPlaylistTracks(trackId))
    })),
    withProps(({ getPlaylistTracks }) => ({
        playlistTracks: trackId => getPlaylistTracks(trackId) 
    })),
    withHandlers({
        onClickPlaylist: ({ playlistTracks, openModalDetails }) => trackId => () => {
            playlistTracks(trackId);
            openModalDetails(trackId)
        }

    })
)

const FeaturedPlaylist = ({ onClickPlaylist, item: { images, name, id } }) => {
    return (
        <div className={componentClassName}>
            <img src={images[0].url} onClick={onClickPlaylist(id)}/>
            <h4 className={`${componentClassName}__title`}>{name}</h4>
        </div>
    );
}

export default enhance(FeaturedPlaylist);
