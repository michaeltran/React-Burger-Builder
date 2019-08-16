import React from 'react';

import Aux from '../../hoc/Auxiliary.js';
import App from '../../App.js';
import classes from './Layout.module.css';

console.log(classes.Content)

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;