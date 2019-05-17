import './newReleases.scss';

import { Container } from 'react-bootstrap';
import NewRelease from './newRelease';
import React from 'react';

const componentClassName = 'new-releases';

const NewReleases = ({ releases }) => {
    return (
        <div className={componentClassName}>
            {(releases !== undefined) && (
                <Container className={`${componentClassName}__container`}>
                    {releases.map(item => (
                        <NewRelease key={item.id} item={item} />
                    ))}
                </Container>
            )}
        </div>
    );
}

export default NewReleases;
