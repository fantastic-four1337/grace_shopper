import Users from '../actionTypes/users'
import axios from 'axios'

export const gotSingleUser = (user) => {
    return {
        type: Users.GOT_SINGLE_USER,
        payload: {
            status: 'loaded',
            selectedUser: user
        }
        
    }
}

export const gotUsers = (users) => {
    return {
        type: Users.GOT_USERS,
        payload: {
            status: 'loaded',
            instances: users
        }
    }
}

export const addedUser = (user) => {
    return {
        type: Users.ADDED_USER,
        payload: {
            status: 'loaded',
            selectedUser: user 
        }
    }
}

export const removedUser = (user) => {
    return {
        type: Users.REMOVE_USER,
        payload: {
            status: 'loaded',
            selectedUser: user
        }
    }
}

export const editedUser = (user) => {
    return {
        type: Users.EDITED_USER,
        payload: {
            status: 'loaded',
            selectedUser: user
        }
    }
}

