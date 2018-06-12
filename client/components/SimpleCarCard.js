import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { editCar } from '../thunks/cars'

const styles = {
  card: {
    width: 300,
    height: 375
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
  },
  center: {
    textAlign: 'center',
    padding: 'none'
  }
};

class SimpleCarCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      model: '',
      year: '',
      color: '',
      imageUrl: '',
      description: '',
      specification: '',
      price: '',
      country: '',
      id: 0,
      cartId: 0,
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleQuickBuy = this.handleQuickBuy.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }

  componentDidMount() {
    this.setState({...this.props.car, cartId: this.props.userId})
  }

  handleAddToCart (event) {
    event.preventDefault()
    if (!this.props.userId){
      if (!localStorage.carId){
        let firstCarArr = [this.state.id]
        let carObj = JSON.stringify(firstCarArr)
        localStorage.setItem('carId', carObj)
        this.props.addToCart(this.state.id, this.state)
      } else {
          let carIdArr = JSON.parse(localStorage.carId)
          carIdArr.push(this.state.id)
          let carIdStr = JSON.stringify(carIdArr)
          localStorage.setItem('carId', carIdStr)
          this.props.addToCart(this.state.id, this.state)
      }
    } else {
        this.props.addToCart(this.state.id, this.state)
    }
  }

  handleQuickBuy (event) {
    event.preventDefault()
    this.props.quickBuy(this.state.id, this.state)
  }

  handleRemoveFromCart (event) {
    event.preventDefault()
    this.props.addToCart(this.state.id, {...this.state, cartId: null})
  }

  render() {
    const { classes, car, userId } = this.props;
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
            {
            car.cartId === userId ||
            (!localStorage.carId ? false : JSON.parse(localStorage.carId).includes(car.id))
            ? <div>
              <p className={classes.center}>
                Added to your cart! Proceed to your cart and checkout!
              </p>
              <Link to="/cart">
                <Button size="small" color="primary">
                  Cart
                </Button>
              </Link>
              <Button size="small" color="primary" onClick={this.handleRemoveFromCart}>
                Remove from Cart
              </Button>
              </div>
            : <div>
            <Button size="small" color="primary" onClick={this.handleQuickBuy}>
              Quick Buy
            </Button>
            <Button id="addToCart" data-car-array="[]" size="small" color="primary" onClick={this.handleAddToCart}>
              Add to Cart
            </Button>
              </div>
            }
          </CardActions>
        </Card>
      </div>
    );
  }
}

SimpleCarCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: (id, updatedCar) => dispatch(editCar(id, updatedCar)),
  quickBuy: (id, updatedCar) => dispatch(editCar(id, updatedCar)).then(() => {
    ownProps.history.push('/cart');
  })
})

const mapStateToProps = state => ({
  userId: state.user.id
})


export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleCarCard)
);
