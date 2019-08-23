import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavagationItems.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.js';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {/* <div onClick={props.opened}>MENU</div> */}
        <div className={classes.Logo}>
            <Logo height="80%" />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems
                isAuthenticated={props.isAuthenticated} />
        </nav>
    </header>
);

export default toolbar;