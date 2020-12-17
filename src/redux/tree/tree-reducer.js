import {TreeActionTypes} from './tree.types';

const INITIAL_STATE = {
    selectedNode: '',
    tree:[]
}

const treeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TreeActionTypes.SET_CURRENT_NODE:
            return {
                ...state, 
                selectedNode: action.payload
            };
        case TreeActionTypes.UPDATE_TREE:
            return {
                ...state, 
                tree: action.payload
            };
        default:
            return state;
        }};

export default treeReducer;