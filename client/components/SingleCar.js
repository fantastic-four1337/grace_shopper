import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { getSingleCar } from '../thunks/cars.js';

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

const SingleCar = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.paper}>
          <Typography gutterBottom variant="display3" component="h2">
            2018 Corvette
          </Typography>
          <Typography component="p">Model: ZF1</Typography>
          <Typography component="p">Year: 2018</Typography>
          <Typography component="p">Color: Ghost White</Typography>
          <Typography component="p">Description: Car of the year</Typography>
          <Typography component="p">
            Specification: V8 Supercharger / 623hp / RWD
          </Typography>
          <Typography component="p">Price: $95,000</Typography>
          <Typography component="p">Country: USA</Typography>
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
};

// const mapStateToProps = state => {
//   return {
//     name: 'Corvette'
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSingleCar: id => dispatch(getSingleCar(id))
//   };
// };

SingleCar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleCar);
