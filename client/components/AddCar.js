import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addCar } from '../thunks/cars';
import { Validation, fieldValidatorCore } from 'react-validation-framework'
import validator from "validator"

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

class AddCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      model: '',
      year: 0,
      color: '',
      imageUrl: '',
      description: '',
      specification: '',
      price: 0,
      country: '',
      userId: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.history.location.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addingCar(this.state);
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
      country,
      userId
    } = this.state;

    return (
      <div className="container">
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            {/* <Validation
              group="myGroup1"
              validators={[
                {
                  validator: (val) => !validator.isEmpty(val),
                  errorMessage: "Cannot be left empty"
                }
              ]}> */}
              <TextField
                id="name"
                label="Name"
                name="name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange}
                margin="normal"
                required={true}
              />
            {/* </Validation> */}
          </div>
          <div>
            <TextField
              id="model"
              label="Model"
              name="model"
              className={classes.textField}
              value={model}
              onChange={this.handleChange}
              margin="normal"
              required={true}
            />
          </div>
          <div>
            <TextField
              id="year"
              label="Year"
              name="year"
              className={classes.textField}
              value={year}
              onChange={this.handleChange}
              margin="normal"
              required={true}
            />
          </div>
          <div>
            <TextField
              id="color"
              label="Color"
              name="color"
              className={classes.textField}
              value={color}
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
              value={price}
              onChange={this.handleChange}
              margin="normal"
              required={true}
            />
          </div>
          <div>
            <TextField
              id="textarea"
              label="Country"
              name="country"
              className={classes.textField}
              value={country}
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
              value={description}
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
              value={specification}
              onChange={this.handleChange}
              margin="normal"
              required={true}
            />
            <div>
              <TextField
                id="imageUrl"
                label="Image"
                multiline
                name="imageUrl"
                className={classes.textField}
                value={imageUrl}
                onChange={this.handleChange}
                margin="normal"
                required={true}
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
          disabled={!name || !model ||!year || !price || !specification || !imageUrl}
        >
          Add Product
        </Button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     car: state.car.singleCar
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addingCar: newCar =>
      dispatch(addCar(newCar)).then(() => {
        ownProps.history.push('/cars');
      })
  };
};

AddCar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(AddCar)
);
