import React from 'react';
import './tinypage.styles.scss';

// components
import { Editor } from '@tinymce/tinymce-react';
// redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectActiveContent, selectedProject} from '../../redux/note/note.selector';
import {updateContent} from '../../redux/note/note.action';

class TinyPage extends React.Component {
  constructor(){
    super();
    this.state = {
        value: '',
        saved: false,
    };    
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onFocusOut = this.onFocusOut.bind(this);
  };
    
  onEditorChange (content) {
    this.setState({value: content, saved:false});
  }

  onFocusOut (content) {
    this.setState({saved:true});
    this.props.updateContent(this.state.value);
  }

  render () {
    const {activeContent, selectedProject} = this.props;
    return (
      <>
        <div>
          <h2>Project : {selectedProject.name}</h2>
          <Editor  ref={(editor) => {this.editor = editor;}} className='editor' value={activeContent} onEditorChange={this.onEditorChange} onFocusOut={this.onFocusOut} 
            init={{
            selector: 'textarea#annotations',
            // toolbar: ['annotate-alpha bold'],
            toolbar: ['undo redo formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'],
            inline: false,
            menubar: false,
            branding: false,
            contextmenu:'bold',
            contextmenu_never_use_native: true,
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
      </>
    )
  }
}

// as the tree changes, get the selected node. send the selected node data to the editor
// as long as something is setting the note.activeContent then this component will render
const mapStateToProps = createStructuredSelector ({
    activeContent: selectActiveContent,
    selectedProject: selectedProject
  });

const mapDispatchToProps = dispatch => ({
  updateContent:(content) => dispatch(updateContent(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(TinyPage);

