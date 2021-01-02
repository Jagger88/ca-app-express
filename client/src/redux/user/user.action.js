// user.action.js
import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    // remember that actions only have type, payload
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})