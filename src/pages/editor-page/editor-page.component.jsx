import React from 'react';
import './editor-page.styles.scss';
// components
// import TMCE from '../../Components/tiny/tiny.component';
import { Editor } from '@tinymce/tinymce-react';
import TreeComponent from '../../Components/rc-tree/rc-tree.component';
// redux
import {connect} from 'react-redux';


class EditorPage extends React.Component {
    constructor(){
        super();

        this.state = {
            uid:'',
            node:'',
            content: [{
                saved: false,
                value: ''
            }],
            gData: [
                { title: '0-0', key: '0'},
                { title: '0-1', key: '1', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
                { title: '0-2', key: '2'},
                { title: '0-3', key: '3'},
                { title: '0-4', key: '4'},
                { title: '0-5', key: '5'},
                { title: '0-6', key: '6'},
            ]
        };    
        
        this.onEditorChange = this.onEditorChange.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    };

    // capture changes and put into state
    onEditorChange (content ) {
        this.setState({content: {value: content}, saved:false});
        //console.log(this.state);
    }

    onFocusOut () {
        this.setState({content: {saved:true}});
        console.log(this.state);
    }
    
    render () {
        return (
            <>
            <div className='editor-page'>
                <div className='tree'>
                    <TreeComponent draggable gData={this.state.gData} />
                </div>
                <div className='editor-container'>
                    <Editor className='editor' value={this.state.value} onEditorChange={this.onEditorChange} onFocusOut={this.onFocusOut} />
                </div>
            </div>
            <div>
                {this.state.content.saved ? <span className='saved'>Saved</span> : null}
            </div>
            </>
        )
    }

}

export default EditorPage;

