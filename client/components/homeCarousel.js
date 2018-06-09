import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux';
import { getCars } from '../thunks/cars.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flext'
  }),
  paperText: {
    justifyContent: 'center'
  }
});

class homeCarousel extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const { classes, cars } = this.props;
    return (
      <div>
        <div>
          <Paper className={classes.root} elevation={4}>
            <Typography className={classes.paperText} variant="headline" component="h3">
              Welcome to Car Gurus.
            </Typography>
            <Typography className={classes.paperText} component="p">
              The world's premier car market place.
            </Typography>
          </Paper>
        </div>
        <div className="carousel-container">
          <Carousel className="carousel" autoPlay>
            {cars.map(car => (
              <div key={car.id}>
                <img src={car.imageUrl} />
                <p className="legend">{car.name}</p>
              </div>
              ))}
          </Carousel>
        </div>
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

homeCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(homeCarousel));
