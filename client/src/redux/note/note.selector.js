import {createSelector} from 'reselect';

const selectNote = state => state.note;

export const selectProjects = createSelector (
    [selectNote],
    note=> note.projects
);

export const selectedProject = createSelector (
    [selectNote],
    note=> note.projects[note.selectedProject]
    );

export const selectedNode = createSelector (
    [selectNote],
    note=> note.selectedNode
);

export const selectTree = createSelector (
    [selectNote],
    note=> note.projects[note.selectedProject].tree
);

export const selectActiveContent = createSelector (
    [selectNote],
    note=> note.activeContent
);

