import '../style/layout/sidebar-item.scss';

import React from 'react';

const componentClassName = 'sidebar-item';

const SidebarItem = ({text, selected}) => (
    <div className={`${componentClassName}${selected ? '--selected' : ''}`}>
        <span>{text}</span>
    </div>
);

export default SidebarItem;