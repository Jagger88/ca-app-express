import {NoteActionTypes} from './note.types';
import {setActiveContent, updateContent, updateProjectTree} from './note.utils';

const INITIAL_STATE = {
    selectedProject:'',
    selectedNode: '',
    activeContent: '',
    projects:[
        {key: '0',
        name: 'My First Project',
        imageURL: './assets/workspace.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tree:[{ title: 'Introduction', key: '0'},
            { title: 'Products', key: '1', children: [{ title: 'Project A', key: 'A' },{ title: 'Project B', key: 'B' }]},
            { title: 'Friends', key: '2'},
            { title: 'Ideas', key: '3'},
            { title: 'Projects', key: '4'}
        ],
        content:[
            {key:'0', value:'<h1>0</h1><p>Key 0 data testest</p>'},
            {key:'1', value:'<h1>1</h1><p>1 data testest</p>'},
            {key:'2', value:'<h1>2</h1><p>2. rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p>'},
            {key:'3', value:'<h1>3</h1><p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'A', value:'<h1>2</h1><p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'},
            {key:'B', value:'<h1>3</h1><p>3. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab</p>'},
            {key:'4', value:'<h1>4</h1><p>4. sd0fgfdgs data testest</p>'}
        ]},
        {key: '1',
        name: 'My personal notes',
        imageURL: './assets/logo512.png',
        description: 'This is contains my personal notes.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tree:[{ title: 'Introduction', key: '0'},
            { title: 'Products', key: '1', children: [{ title: 'Project A', key: 'A' },{ title: 'Project B', key: 'B' }]},
            { title: 'Friends', key: '2'},
            { title: 'Ideas', key: '3'}
        ],
        content:[
            {key:'0', value:'<h1>0</h1><p>Key 0 data testest</p>'},
            {key:'1', value:'<h1>1</h1><p>1 data testest</p>'},
            {key:'A', value:'<h1>2</h1><p>2. sd0fgfdgs data testest</p>'},
            {key:'2', value:'<h1>2</h1><p>2. sd0fgfdgs data testest</p>'},
            {key:'3', value:'<h1>3</h1><p>3. sd0fgfdgs data testest</p>'},
            {key:'B', value:'<h1>3</h1><p>3. sd0fgfdgs data testest</p>'}  
        ]}
    ]
}

const noteReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case NoteActionTypes.SET_CURRENT_NODE:
            return {
                ...state, 
                selectedNode: action.payload,
                activeContent: setActiveContent(state.projects, state.selectedProject, action.payload)
            };
        case NoteActionTypes.UPDATE_TREE:
            return {
                ...state, 
                projects: updateProjectTree(state.projects, state.selectedProject, action.payload)
            };
        case NoteActionTypes.UPDATE_CONTENT:
            return {
                ...state, 
                activeContent: action.payload,
                projects: updateContent(state.projects, state.selectedProject,state.selectedNode,action.payload),
            };
        case NoteActionTypes.SET_SELECTED_PROJECT:
            return {
                ...state, 
                selectedProject: action.payload
            };
        default:
            return state;
        }};

export default noteReducer;