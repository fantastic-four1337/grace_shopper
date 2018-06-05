import {
  gotSingleUser,
  gotUsers,
  addedUser,
  removedUser,
  editedUser
} from '../actionCreators';
import axios from 'axios';

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

export const addUser = userInfo => async dispatch => {
  try {
    const newUser = await axios.post(`/api/users/`, userInfo);
    dispatch(addedUser(newUser));
  } catch (err) {
    console.log(err);
  }
};

export const editUser = (id, userInfo) => async dispatch => {
  try {
    const updatedUser = await axios.put(`/api/users/${id}`, userInfo);
    dispatch(editedUser(id, updatedUser));
  } catch (err) {
    console.log(err);
  }
};

export const removeUser = id => async dispatch => {
  try {
    await axios.delete(`/api/users/${id}`, id);
    dispatch(removedUser(id));
  } catch (err) {
    console.log(err);
  }
};
