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

export const addNode = () => ({
    type:NoteActionTypes.ADD_NODE
});

export const deleteNode = node => ({
    type:NoteActionTypes.DELETE_NODE,
    payload: node
});

export const setSelectedProject = (key) => ({
    type:NoteActionTypes.SET_SELECTED_PROJECT,
    payload: key
});




