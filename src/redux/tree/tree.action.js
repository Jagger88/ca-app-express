import {TreeActionTypes} from './tree.types';

export const updateTree = (tree) => ({
    type:TreeActionTypes.UPDATE_TREE,
    payload: tree
});

export const setCurrentNode = node => ({
    type:TreeActionTypes.SET_CURRENT_NODE,
    payload: node
});

