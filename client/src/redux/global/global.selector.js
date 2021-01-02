import {createSelector} from 'reselect';

const selectGlobal = state => state.global;

export const selectDebugText = createSelector (
    [selectGlobal],
    global => global.debugText
);

export const selectToggleDebug = createSelector (
    [selectGlobal],
    global => global.toggleDebug
);


