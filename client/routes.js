import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import Cart from './components/Cart';
import { me } from './store';
import CheckOut from './components/CheckOut';
import GuestCheckout from './components/GuestCheckout';
import CarResults from './components/CarResults';
import SingleCarBuyer from './components/SingleCarBuyer';
import EditCar from './components/EditCar';
import AddCar from './components/AddCar';
import SingleCarOwner from './components/SingleCarOwner';
import HomeCarousel from './components/HomeCarousel';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    if (status === 'unasked') return null;
    if (status === 'loading') {
      return <div>Loading</div>;
    } else {
      return (
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomeCarousel} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route exact path="/guest-checkout" component={guestCheckOut} /> */}
          <Route path="/cart" component={Cart} />
          <Route exact path="/cars" component={CarResults} />
          <Route exact path="/cars/:carId" component={SingleCarBuyer} />
          <Route exact path="/editcar/:carId" component={EditCar} />
          <Route exact path="/addcar" component={AddCar} />
          <Route exact path="/guest-checkout" component={GuestCheckout} />
          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/profile" component={UserHome} />
              <Route path="/profile/:carId" component={SingleCarOwner} />
              <Route exact path="/checkout" component={CheckOut} />
            </Switch>
          )}
          {/* Displays our Login component as a fallback */}
          <Route component={Login} />
        </Switch>
      );
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
