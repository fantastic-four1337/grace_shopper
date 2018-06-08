import React, { Component } from 'react';
// import { editCar } from './thunks/cars';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getSingleCar, editCar } from '../thunks/cars';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

class EditCar extends Component {
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
      country: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.carId;
    this.props.fetchSingleCar(id);
  }

  UNSAVED_componentWillReceiveProps(nextProps) {
    console.log('nextProps!!!', nextProps);
    const {
      name,
      model,
      year,
      color,
      imageUrl,
      description,
      specification,
      price,
      country
    } = nextProps.singleCar;
    this.setState({
      name,
      model,
      year,
      color,
      imageUrl,
      description,
      specification,
      price,
      country
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = this.props.match.params.carId;
    this.props.updateCar(id, this.state);
  }

  // eslint-disable-next-line complexity
  render() {
    const { classes } = this.props;
    const {
      id,
      name,
      model,
      year,
      color,
      imageUrl,
      description,
      specification,
      price,
      country
    } = this.props.singleCar;

    return (
      <div className="container">
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="name"
              label="Name"
              name="name"
              className={classes.textField}
              value={id ? name : this.state.name}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="model"
              label="Model"
              name="model"
              className={classes.textField}
              value={id ? model : this.state.model}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="year"
              label="Year"
              name="year"
              className={classes.textField}
              value={id ? year : this.state.year}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="color"
              label="Color"
              name="color"
              className={classes.textField}
              value={id ? color : this.state.color}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="textarea"
              label="Price"
              name="price"
              className={classes.textField}
              value={id ? price : this.state.price}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="textarea"
              label="Country"
              name="country"
              className={classes.textField}
              value={id ? country : this.state.country}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="textarea"
              label="Description"
              multiline
              name="description"
              className={classes.textField}
              value={id ? description : this.state.description}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="textarea"
              label="Specification"
              multiline
              name="specification"
              className={classes.textField}
              value={id ? specification : this.state.specification}
              onChange={this.handleChange}
              margin="normal"
            />
            <div>
              <TextField
                id="imageUrl"
                label="Image"
                multiline
                name="imageUrl"
                className={classes.textField}
                value={id ? imageUrl : this.state.imageUrl}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
          </div>
        </form>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
          // disabled={name && address && description ? null : true}
        >
          Update Product
        </Button>
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
    fetchSingleCar: id => dispatch(getSingleCar(id)),
    updateCar: (id, updatedCar) => dispatch(editCar(id, updatedCar))
  };
};

EditCar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditCar)
);
