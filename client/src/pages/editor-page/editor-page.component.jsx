import React from 'react';
import './editor-page.styles.scss';
// components

import VerticalNav from '../../components/sidepanels/verticalnav.component';
import TinyPage from '../../components/tiny/tinypage.component';
import ProjectDropdown from '../../components/dropdown/project-dropdown.component';
import ProjectCard from '../../components/card-list/projectcards.component';
//
import {connect} from 'react-redux';
import {selectedProject} from '../../redux/note/note.selector';
import {createStructuredSelector} from 'reselect';


const EditorPage = ({selectedProject}) => 
(
  <>
    <div className='editor-page'>
    {!selectedProject ? <ProjectCard /> : 
    <>
      <div className='leftnav'>
        <VerticalNav>
          <ProjectDropdown/>
        </VerticalNav>                 
      </div>
      <div className='editor-container'>
         <TinyPage />
        {/* {!selectedProject ? <ProjectCard /> : <TinyPage /> } */}
      </div>
      </>  
      }
    </div>
  </>
)
  
const mapStateToProps = createStructuredSelector ({
  selectedProject: selectedProject
})


export default connect(mapStateToProps)(EditorPage);

