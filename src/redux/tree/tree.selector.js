import {createSelector} from 'reselect';

const selectTree = state => state.tree;

export const selectedNode = createSelector (
    [selectTree],
    tree=> tree.selectedNode
);