import '../style/layout/sidebar.scss';

import React from 'react';
import SidebarItem from './sidebar-item';

const componentClassName = 'sidebar';

const Sidebar = () => (
    <div className={`${componentClassName}`}>
        <div className={`${componentClassName}__top-section`}>
            <div className={`${componentClassName}__user-image`}>
                logo
            </div>
            <div className={`${componentClassName}__user-name`}>
                User Name
            </div>
        </div>
        <div className={`${componentClassName}__middle-section`}>
            <SidebarItem text="Primeiro Item"/>
        </div>
        <div className={`${componentClassName}__bottom-section`}>
            Sair
        </div>
    </div>
);

export default Sidebar;