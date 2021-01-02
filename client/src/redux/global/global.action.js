import {GlobalActionTypes} from './global.types';

export const addDebugText = global => ({
    // remember that actions only have type, payload
    type: GlobalActionTypes.ADD_DEBUGTEXT,
    payload: global
});

export const clearDebugText = () => ({
    // remember that actions only have type, payload
    type: GlobalActionTypes.CLEAR_DEBUGTEXT
});

export const toggleDebugConsole = () => ({
    // remember that actions only have type, payload
    type: GlobalActionTypes.TOGGLE_DEBUG
});