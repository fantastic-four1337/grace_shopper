import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSingleCar } from '../thunks/cars.js';

const styles = theme => ({
  card: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SingleCar extends Component {
  componentDidMount() {
    const id = this.props.match.params.carId;
    this.props.fetchSingleCar(id);
  }

  render() {
    const { classes } = this.props;
    const {
      name,
      model,
      year,
      color,
      description,
      specification,
      price,
      country,
      imageUrl
    } = this.props.singleCar;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.paper}>
            <Typography gutterBottom variant="display3" component="h2">
              {name} {model}
            </Typography>
            <Typography component="p">Model: {model}</Typography>
            <Typography component="p">Year: {year}</Typography>
            <Typography component="p">Color: {color}</Typography>
            <Typography component="p">Description: {description}</Typography>
            <Typography component="p">
              Specification: {specification}
            </Typography>
            <Typography component="p">Price: ${price}</Typography>
            <Typography component="p">Country: {country}</Typography>
          </CardContent>
          <CardActions className={classes.root}>
            <Button size="small" color="primary">
              Quick Buy
            </Button>
            <Button size="small" color="primary">
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleCar: state.car.singleCar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCar: id => dispatch(getSingleCar(id))
  };
};

SingleCar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleCar)
);
