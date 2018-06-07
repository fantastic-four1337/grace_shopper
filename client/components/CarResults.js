import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SimpleCarCard from './SimpleCarCard'
import { getCars } from '../thunks/cars.js'

  const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    rowOfCars: {
        display: 'flex',
        flexWrap: 'wrap'
    }
  };

class CarResults extends Component {

  componentDidMount() {
    this.props.getCars()
  }

  render() {
    const { classes, cars } = this.props
    return (
      <div className={classes.rowOfCars}>
          {
              cars.map(car => <SimpleCarCard key={car.id} car={car} />)
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.car.cars
})

const mapDispatchToProps = (dispatch) => ({
  getCars: () => dispatch(getCars())
})

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CarResults)
);
