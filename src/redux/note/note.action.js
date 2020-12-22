import {NoteActionTypes} from './note.types';

export const updateTree = (tree) => ({
    type:NoteActionTypes.UPDATE_TREE,
    payload: tree
});

export const setCurrentNode = node => ({
    type:NoteActionTypes.SET_CURRENT_NODE,
    payload: node
});

export const updateContent = (content) => ({
    type:NoteActionTypes.UPDATE_CONTENT,
    payload: content
});




