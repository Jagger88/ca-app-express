import React from 'react';
import './editor-page.styles.scss';
// components
import { Editor } from '@tinymce/tinymce-react';
import ProjectCards from '../../components/card-list/projectcards.component';
import TreeComponent from '../../components/rc-tree/reduxtree.component';
// redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectedNode} from '../../redux/note/note.selector';
import VerticalNav from '../../components/sidepanels/verticalnav.component';


class EditorPage extends React.Component {
    constructor(){
        super();
        this.state = {
            node:'',
            saved: false,
            value: '',
          //   gData: [
          //     { title: '0-0', key: '0'},
          //     { title: '0-1', key: '1', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
          //     { title: '0-2', key: '2'},
          //     { title: '0-3', key: '3'},
          //     { title: '0-4', key: '4'}
          // ],
          // nData: [
          //     {key:'0', value:'<h1>0</h1><p>sd0fgfdgs data testest</p>'},
          //     {key:'1', value:'<h1>1</h1><p>sd0fgfdgs data testest</p>'},
          //     {key:'2', value:'<h1>2</h1><p>sd0fgfdgs data testest</p>'},
          //     {key:'3', value:'<h1>3</h1><p>sd0fgfdgs data testest</p>'},
          //     {key:'4', value:'<h1>4</h1><p>sd0fgfdgs data testest</p>'}
          // ]
        };    
        this.onEditorChange = this.onEditorChange.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    };
    // capture changes and put into state
    onEditorChange (content) {
        this.setState({value: content, saved:false});
    }

    onFocusOut () {
        // set saved and put into redux....
        this.setState({saved:true});
        //console.log(this.state);
    }
    
    test=() =>{
      
      var domObject = this.editor.editor.dom;

      var annotaorObject = this.editor.editor.annotator;
      var annotationAll = annotaorObject.getAll('alpha')
      console.log(annotationAll);
      
      var selectionObject = this.editor.editor.selection;
      var selectionHTML = selectionObject.getContent();
      
      console.log(selectionObject);
      console.log(selectionHTML);
      var bm = selectionObject.getBookmark(); // bookmark 1
      // this adds content
      selectionObject.setContent(' This is where bookmark:' + JSON.stringify(bm) + ' was ');
      selectionObject.setContent('Some new content<br>Some new content Some new content Some new content');
     var bm1 = selectionObject.getBookmark();
      selectionObject.setContent('<HERE>Some new content<br>Some new content Some new content Some new content');
      // this creates and element... 
      selectionObject.setNode(domObject.create('img', {src: 'some.gif', title: 'some title'}));
 
       //var mycontent = this.editor.annotator.getAll('alpha');
        // var nodesInFirstUid = annotations['first-uid'];

       selectionObject.moveToBookmark(bm1);
       selectionObject.setContent(' INSERTED bookmark:' + JSON.stringify(bm1));
       selectionObject.moveToBookmark(bm);
       selectionObject.setContent('WINNER');
       // selectionObject.select(bm, true); /// haven't figgured out what this does
       // selectionObject.setCursorLocation()// don't knkow what this does
      
    //  // We get editor's content, where 'editor' is a tinymce editor instance
    //  var content = editor.getContent();

    //  function selectText(start, end) {
    //  // We have start and end position of the text which we want to select
    //  // Then we wrap our word or frase between positions into span with unique id
    //  let content_with_span = content.substring(0, start) + '<span id="'+start+'_'+end+'">' + content.substring(start,end) + '</span>' + content.substring(end, content.length);
    //  // I keep the original 'content' variable outside, because in my case user can switch between various frases and when we switch to the next selection, we don't want to keep previos span in text
 
    //  // Return content with span into editor
    //  editor.setContent(content);
 
    //  // Create selection
    //  let selection = tinyMCE.activeEditor.dom.select('span[id="'+ start + '_' +  end + '"]')[0];
 
    //  // If selection exists, select node and move to it
    //     if (selection) {
    //        tinyMCE.activeEditor.selection.select(selection);
    //        selection.scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
    //     }
    //  }
    };

    render () {
        const node=this.props.selectedNode;
        return (
            <>
            <div className='editor-page'>
                <div className='leftnav'>
                <VerticalNav>
                    <div>My Projects</div>
                    <p>Project A</p>
                    <p>Project B</p>
                    <p>Need to make this section dynamic</p>
                    </VerticalNav>
                  <VerticalNav>
                    <TreeComponent draggable gData={this.state.gData} />
                    </VerticalNav>
                </div>
                <div className='editor-container'>
                    <Editor  ref={(editor) => {this.editor = editor;}} className='editor' value={this.state.value} onEditorChange={this.onEditorChange} onFocusOut={this.onFocusOut} 
                     
                       
                     init={{
                        selector: 'textarea#annotations',
                        toolbar: ['annotate-alpha bold'],
                        menubar: false,
                        height: '750px',
                        content_style: '.mce-annotation { color: red; font-size: 12px; } ' + 
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        + '.mce-annotation:hover{color: blue}',
                      
                        setup(editor) {
                            editor.ui.registry.addButton('annotate-alpha', {
                                text: 'Annotate',
                                onAction: function() {
                                  var comment = prompt('Comment with?');
                                  editor.annotator.annotate('alpha', {
                                    comment: comment
                                  });
                                  editor.focus();
                                },
                                onSetup: function (btnApi) {
                                  editor.annotator.annotationChanged('alpha', function (state, name, obj) {
                                    console.log('Current selection has an annotation: ', state);
                                    btnApi.setDisabled(state);
                                  });
                                }
                              });
                          
                              editor.on('init', function () {
                                editor.annotator.register('alpha', {
                                  persistent: true,
                                  decorate: function (uid, data) {
                                    return {
                                      attributes: {
                                        'data-mce-comment': data.comment ? data.comment : '',
                                        'data-mce-author': data.author ? data.author : 'anonymous'
                                        
                                      }
                                    };
                                  }
                                });
                              });
                            }}}
                    
                    />
                </div>
            </div>
            <div>
                {this.state.saved ? <span className='saved'>Saved</span> : null}
                Current Node: {node}
                {this.state.value}
            </div>
            <button onClick={this.test}>test</button>
            </>
        )
    }

}


// as the tree changes, get the selected node. send the selected node data to the editor
const mapStateToProps = createStructuredSelector ({
    selectedNode: selectedNode
  });

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);

