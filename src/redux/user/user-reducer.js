// user-reducer.js
import {UserActionTypes} from './user.types';

// this used to set the default states since the very first time there is an action, state may not have been set
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state=INITIAL_STATE, action)=> {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            // reducer should always return 2 values, the original state and the action.payload
            return {
                ...state,
                currentUser:action.payload}
        // this is the else or catch all. if action is not recognized, then just return the same state
        default: 
            return state;
    }

}
 
export default userReducer;