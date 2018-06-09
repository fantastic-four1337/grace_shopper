import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonFloat: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
});

function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button variant="fab" color="secondary" aria-label="add" className={classes.buttonFloat}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
