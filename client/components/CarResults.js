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
    const { classes, cars } = this.props;
    return (
      <div className={classes.rowOfCars}>
        {cars.map(car => <SimpleCarCard key={car.id} car={car} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.car.cars
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
