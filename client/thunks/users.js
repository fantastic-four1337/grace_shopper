import  { gotSingleUser, gotUsers, addedUser, removedUser, editedUser } from '../actionCreators'
import axios from 'axios'


export const getUsers = () => async dispatch => {
    try {
      const allUsers = await axios.get('/api/users');
      const users = allUsers.data;
      dispatch(gotUsers(users));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getSingleUser = id => async dispatch => {
    try {
      const singleUser = await axios.get(`/api/users/${id}`);
      const user = singleUser.data;
      dispatch(gotSingleUser(user));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const addUser = userInfo => dispatch => {
    try {
      dispatch(addedUser(userInfo));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const removeUser = userInfo => dispatch => {
    try {
      dispatch(removedUser(userInfo));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const editUser = userInfo => dispatch => {
    try {
      dispatch(editedUser(userInfo));
    } catch (err) {
      console.log(err);
    }
  };