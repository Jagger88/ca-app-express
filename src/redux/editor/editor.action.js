import {EditorActionTypes} from './editor.types';

export const updateContent = content => ({
    // remember that actions only have type, payload
    type: EditorActionTypes.UPDATE_CONTENT,
    payload: content
});