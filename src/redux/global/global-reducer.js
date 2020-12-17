import {GlobalActionTypes} from './global.types';

const INITIAL_STATE = {
    toggleDebug: false,
    debugText: ''    
}

const globalReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GlobalActionTypes.ADD_DEBUGTEXT:
        return {
                ...state, 
                debugText: state.debugText + '<br>' + action.payload
            }
        case GlobalActionTypes.CLEAR_DEBUGTEXT:
            return {
                ...state, 
                debugText: ''
            }
        case GlobalActionTypes.TOGGLE_DEBUG:
            return {
                ...state, 
                toggleDebug: !state.toggleDebug
            }
        default:
            return state;
    }
}

export default globalReducer;
