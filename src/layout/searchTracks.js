import './searchTracks.scss';

import React from 'react';
import { isEmpty } from 'ramda';

const componentClassName = 'search-tracks';

const SearchTracks = ({ filteredItems }) => (
    <div className={componentClassName}>
        {filteredItems !== undefined && (
            <div className={`${componentClassName}__playlists`}>
                {filteredItems.map(item => (
                    <div key={item.id} className={`${componentClassName}__playlist`}>
                        <img className={`${componentClassName}__image`} src={item.images[0].url} />
                        <h4 className={`${componentClassName}__name`}>{item.name}</h4>
                    </div>
                ))}
                {isEmpty(filteredItems) && (
                    <h2 className={`${componentClassName}__no-results`}>No results were found :(</h2>
                )}
            </div>
        )}
    </div>
)

export default SearchTracks;
