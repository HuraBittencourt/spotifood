import './playlistTracks.scss';

import { isEmpty, isNil } from 'ramda';

import React from 'react';

const componentClassName = 'playlist-track';

const PlaylistTracks = ({ name, popularity, external_url, preview }) => (
    <div className={componentClassName}>
        <h2 className={`${componentClassName}__title`}>{name}</h2>
        <div className={`${componentClassName}__popularity`}>
            <h4>Popularity</h4>
            <p className={`${componentClassName}__number-popularity`}>{popularity}</p>
            {!isNil(preview) && (
                <audio className={`${componentClassName}__preview`} controls='controls'>
                    <source src={preview} type="audio/mp3"/>
                </audio>
            )}
            {isNil(preview) && (
                <span className={`${componentClassName}__no-preview`}>No preview</span>
            )}
        </div>
        <a href={external_url} target="_blank">Open in Spotify</a>
    </div>
)

export default PlaylistTracks;
