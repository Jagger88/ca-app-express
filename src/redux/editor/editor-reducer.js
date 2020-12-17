import {EditorActionTypes} from './editor.types';
import {updateNodeContent} from './editor.utils';

const INITIAL_STATE = {
    nodes: []
}

const editorReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EditorActionTypes.UPDATE_CONTENT:
            return {
                ...state, 
                nodes: updateNodeContent(state.nodes, action.payload)
            };
        default:
            return state;
        }};

export default editorReducer;