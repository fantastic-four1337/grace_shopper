import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCar } from '../thunks/cars'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    // maxWidth: 345,
    width: 300,
    height: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  link: {
    color: 'blue',
  }
};

function SimpleUserCarCard(props) {
  const { classes, car, removeCar } = props;
  
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={car.imageUrl}
          title={car.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <Link to={`/home/${car.id}`} className={classes.link}>{car.name}</Link>
          </Typography>
          <Typography component="p">
            {car.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={{
                pathname: `/editcar/${car.id}`,
                state: {id: car.id,
                name: car.name,
                model: car.model,
                year: car.year,
                color: car.color,
                imageUrl: car.imageUrl,
                description: car.description,
                specification: car.specification,
                price: car.price,
                country: car.country
              }
            }}>
          <Button size="small" color="primary">
            Edit
          </Button>
          </Link>
          <Button size="small" color="primary" onClick={() => removeCar(car.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleUserCarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeCar: (id) => dispatch(removeCar(id))
})

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(SimpleUserCarCard)
);
