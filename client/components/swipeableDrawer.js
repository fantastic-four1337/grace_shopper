import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logoutButton: {
    color: 'blue',
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)
    const loggedInList = (
      <div className={classes.list}>
        <List ><Link to="/">Home</Link></List>
        <Divider />
        <List ><Link to="/cars">Cars</Link></List>
        <Divider />
        <List ><Link to="/cart">Cart</Link></List>
        <Divider />
        <List ><Link to="/checkout">Checkout</Link></List>
        <Divider />
        <List onClick={this.props.handleClick} className={classes.logoutButton}>Logout</List>
      </div>
    );
    const loggedOutList = (
      <div className={classes.list}>
        <List ><Link to="/login">Login</Link></List>
        <Divider />
        <List><Link to="/signup">Sign Up</Link></List>
        <Divider />
        <List ><Link to="/cars">Cars</Link></List>
        <Divider />
        <List ><Link to="/cart">Cart</Link></List>
        <Divider />
        <List><Link to="/checkout">Checkout</Link></List>
      </div>
    );

    return (
      <div>
        <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.toggleDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {this.props.isLoggedIn ? loggedInList : loggedOutList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapState,
  mapDispatch
)(SwipeableTemporaryDrawer));
