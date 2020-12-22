import React from 'react';
import './editor-page.styles.scss';
// components
import TreeComponent from '../../components/rc-tree/reduxtree.component';
import VerticalNav from '../../components/sidepanels/verticalnav.component';
import TinyPage from '../../components/tiny/tinypage.component';

const EditorPage = () => (
  <>
    <div className='editor-page'>
      <div className='leftnav'>
          <VerticalNav><TreeComponent draggable /></VerticalNav>                 
      </div>
      <div className='editor-container'>
        <TinyPage />
      </div>
    </div>
  </>
)
  
export default EditorPage;

