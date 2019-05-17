import './featuredPlaylists.scss';

import { Container, Row } from 'react-bootstrap';
import { isEmpty, isNil, map } from 'ramda';

import FeaturedPlaylist from './featuredPlaylist';
import React from 'react';
import Slider from 'react-slick';

const componentClassName = "featured-playlists";

const FeaturedPlaylists = ( { featuredPlaylistsItems, ...props } ) => {
    return (
        <div className={componentClassName}>
            {(featuredPlaylistsItems !== undefined) && (
                <Container className={`${componentClassName}__container`}>
                    {featuredPlaylistsItems.map(item => (
                        <FeaturedPlaylist key={item.id} item={item} {...props}/>
                    ))}
                </Container>
            )}
        </div>
    );
}

export default FeaturedPlaylists;
