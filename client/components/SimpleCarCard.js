import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    width: 300,
    height: 350
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  link: {
    color: 'black'
  },
  pads: {
    paddingTop: '10px'
  }
};

function SimpleCarCard(props) {
  const { classes, car } = props;
  return (
    <div className={classes.pads}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={car.imageUrl}
          title={car.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <Link to={`/cars/${car.id}`} className={classes.link}>
              {car.name} {car.model}
            </Link>
          </Typography>
          <Typography component="p">{car.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Quick Buy
          </Button>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCarCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCarCard);
