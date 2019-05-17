import './newRelease.scss';

import { compose, withHandlers } from 'recompose';

import React from 'react';

const enhance = compose(
    withHandlers({
        redirecToSpotify: () => urlToRedirect => () => window.open(urlToRedirect, '_blank')
    })
)

const componentClassName = 'new-release';

const NewRelease = ({ item, item: { images, name }, redirecToSpotify }) => {
    return (
        <div className={componentClassName} onClick={redirecToSpotify(item.external_urls.spotify)}>
            <img src={images[1].url} />
            <h4 className={`${componentClassName}__title`}>{name}</h4>
        </div>
    );
}

export default enhance(NewRelease);
