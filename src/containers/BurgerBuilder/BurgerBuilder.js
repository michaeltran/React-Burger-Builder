import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary.js';
import Burger from '../../components/Burger/Burger.js';

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;