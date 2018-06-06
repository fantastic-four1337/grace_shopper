import USERS from '../actionTypes/users';

export const gotUsers = users => {
  return {
    type: USERS.GOT_USERS,
    payload: {
      status: 'loaded',
      instances: users
    }
  };
};

export const gotSingleUser = user => {
  return {
    type: USERS.GOT_SINGLE_USER,
    payload: {
      status: 'loaded',
      selectedUser: user
    }
  };
};

export const addedUser = user => {
  return {
    type: USERS.ADDED_USER,
    payload: {
      status: 'loaded',
      selectedUser: user
    }
  };
};

export const editedUser = (id, user) => {
  return {
    type: USERS.EDITED_USER,
    payload: {
      status: 'loaded',
      selectedUser: user,
      id
    }
  };
};

export const removedUser = id => {
  return {
    type: USERS.REMOVE_USER,
    payload: {
      status: 'loaded',
      id
    }
  };
};

export const loadedUser = () => ({
  type: USERS.REQUESTED_USER,
  payload: {
    status: 'loading'
  }
})

export const failedUser = () => ({
  type: USERS.LOAD_FAILED,
  payload: {
    status: 'failed'
  }
})
