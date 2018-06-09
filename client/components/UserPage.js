import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SimpleUserCarCard from './SimpleUserCarCard';
import { getCars } from '../thunks/cars.js';
import { getSingleCart } from '../thunks/carts';
import { Link } from 'react-router-dom';
import AddButton from './AddButton'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  rowOfCars: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  buttonFloat: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    }
};

class UserPage extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const { classes, userId } = this.props;
    const cars = this.props.cars.filter(car => car.userId === userId);
    return (
      <div>
        <div className={classes.rowOfCars}>
          {cars.map(car => <SimpleUserCarCard key={car.id} car={car} />)}
        </div>
        <Link
          to={{
            pathname: '/addCar',
            state: {
              userId
            }
          }}
        >
          <AddButton className={classes.buttonFloat} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.car.cars,
  cart: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(getCars()),
  getSingleCart: id => dispatch(getSingleCart(id))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
