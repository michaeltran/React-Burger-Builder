import React, { Component } from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from './containers/Checkout/Checkout.js';
import Orders from './containers/Orders/Orders.js';
import Auth from './containers/Auth/Auth.js';
import Logout from './containers/Auth/Logout/Logout.js';
import * as actions from './store/actions/index.js';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);
// export default withRouter(connect(null, mapDispatchToProps)(App));