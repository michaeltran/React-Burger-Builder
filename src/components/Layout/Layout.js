import React from 'react';

import Aux from '../../hoc/Auxiliary.js';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;