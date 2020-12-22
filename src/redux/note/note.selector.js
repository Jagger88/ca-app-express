import {createSelector} from 'reselect';

const selectNote = state => state.note;

export const selectedNode = createSelector (
    [selectNote],
    note=> note.selectedNode
);

export const selectTree = createSelector (
    [selectNote],
    note=> note.tree

);

export const selectActiveContent = createSelector (
    [selectNote],
    note=> note.activeContent
);

