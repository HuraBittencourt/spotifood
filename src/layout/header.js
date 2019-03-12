// import './style/layout/header';
import '../style/layout/header.scss';

import React from 'react';

const componentClassName = 'header';

const Header = () => (
    <div className={`${componentClassName}`}>
        <div className={`${componentClassName}__header-logo`}>
            <p>
                Spotifood
            </p>    
        </div>
    </div>
);

export default Header;