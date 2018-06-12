import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from './SwipeableDrawer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    color: 'white'
  }
};

class MenuAppBar extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <SwipeableDrawer />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {this.props.isLoggedIn ? (
                <Link to="/home" className={classes.link}>
                  Car Gurus
                </Link>
              ) : (
                <span>Car Gurus</span>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

export default withStyles(styles)(connect(mapState)(MenuAppBar));

/**
 * PROP TYPES
 */
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};
