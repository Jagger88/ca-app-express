import {createSelector} from 'reselect';

const selectEditor = state => state.editor;

export const selectEditorNode = createSelector (
    [selectEditor],
    editor=> editor.node
);


