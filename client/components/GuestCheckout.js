import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Stripe from './Stripe';

import { getCars } from '../thunks/cars';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '800px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    // minWidth: 700
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class GuestCheckout extends Component {
  constructor(props) {
    super(props);
    this.price = 0;
    this.handleChange = this.handleChange.bind(this);
  }

  // Getting cars from backend for dummy purpose
  componentDidMount() {
    this.props.fetchAllCars();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { classes, cars } = this.props;
    if (!localStorage.carId) {
      return (
        <div>
          <p>No cars in your cart yet. Keep browsing.</p>
        </div>
      );
    }
    let carIdArr = !localStorage.carId ? [0] : JSON.parse(localStorage.carId);
    const carsInCart = cars.filter(car => carIdArr.includes(car.id));
    return (
      <div>
        <Typography variant="headline" component="h3">
          Checkout
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Maker</TableCell>
                <TableCell numeric>Name</TableCell>
                <TableCell numeric>Year</TableCell>
                <TableCell numeric>Color</TableCell>
                <TableCell numeric>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carsInCart.map(car => {
                return (
                  <TableRow key={car.id}>
                    <TableCell component="th" scope="row">
                      {car.name}
                    </TableCell>
                    <TableCell>{car.model}</TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{car.color}</TableCell>
                    <TableCell>{car.price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Stripe
          name="orders"
          description={`Total ${carsInCart.length} orders`}
          amount={carsInCart.forEach(car => this.price + car.price)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.car.cars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllCars: () => dispatch(getCars())
  };
};

GuestCheckout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GuestCheckout)
);
