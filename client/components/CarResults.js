import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SimpleCarCard from './SimpleCarCard';
import { getCars } from '../thunks/cars.js';

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
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
};

class CarResults extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const { classes, cars, userId } = this.props;
    const carsForSale = cars
      .filter(car => car.userId !== userId)
      .sort(
        (car1, car2) =>
          `${car1.name} ${car1.model}` > `${car2.name} ${car2.model}`
      );
    return (
      <div className={classes.rowOfCars}>
        {carsForSale.map(car => (
          <SimpleCarCard key={car.id} car={car} {...this.props} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.car.cars,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(getCars())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CarResults)
);
