import Users from '../actionTypes/users';

export const gotUsers = users => {
  return {
    type: Users.GOT_USERS,
    payload: {
      status: 'loaded',
      instances: users
    }
  };
};

export const gotSingleUser = user => {
  return {
    type: Users.GOT_SINGLE_USER,
    payload: {
      status: 'loaded',
      selectedUser: user
    }
  };
};

export const addedUser = user => {
  return {
    type: Users.ADDED_USER,
    payload: {
      status: 'loaded',
      selectedUser: user
    }
  };
};

export const editedUser = (id, user) => {
  return {
    type: Users.EDITED_USER,
    payload: {
      status: 'loaded',
      selectedUser: user,
      id
    }
  };
};

export const removedUser = id => {
  return {
    type: Users.REMOVE_USER,
    payload: {
      status: 'loaded',
      id
    }
  };
};
