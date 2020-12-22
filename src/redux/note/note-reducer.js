import {NoteActionTypes} from './note.types';
import {setActiveContent, updateContent} from './note.utils';

const INITIAL_STATE = {
    selectedNode: '',
    activeContent: '',
    tree:[{ title: 'Introduction', key: '0'},
        { title: 'Products', key: '1', children: [{ title: 'Project A', key: 'A' },{ title: 'Project B', key: 'B' }]},
        { title: 'Friends', key: '2'},
        { title: 'Ideas', key: '3'},
        { title: 'Projects', key: '4'}
],
    content:[
        {key:'0', value:'<h1>0</h1><p>Key 0 data testest</p>'},
        {key:'1', value:'<h1>1</h1><p>1 data testest</p>'},
        {key:'2', value:'<h1>2</h1><p>2. sd0fgfdgs data testest</p>'},
        {key:'3', value:'<h1>3</h1><p>3. sd0fgfdgs data testest</p>'},
        {key:'4', value:'<h1>4</h1><p>4. sd0fgfdgs data testest</p>'}
    ]
}

const noteReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case NoteActionTypes.SET_CURRENT_NODE:
            return {
                ...state, 
                selectedNode: action.payload,
                activeContent: setActiveContent(state.content, action.payload)
            };
        case NoteActionTypes.UPDATE_TREE:
            return {
                ...state, 
                tree: action.payload
            };
        case NoteActionTypes.UPDATE_CONTENT:
            return {
                ...state, 
                content: updateContent(state.content, state.selectedNode, action.payload)
            };
        default:
            return state;
        }};

export default noteReducer;