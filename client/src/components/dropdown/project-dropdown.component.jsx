import React from 'react';
import './project-dropdown.styles.scss';
// components
import Dropdown from './dropdown.component';
import TreeComponent from '../../components/rc-tree/reduxtree.component';
// redux
import {connect} from 'react-redux';
import {setSelectedProject} from '../../redux/note/note.action';
import {createStructuredSelector} from 'reselect';
import {selectProjects, selectedProject} from '../../redux/note/note.selector';


const ProjectDropdown = ({projectList, setSelectedProject, selectedProject }) => {
    
    function handlechange(e) {
        setSelectedProject(e.target.value);
        
    }

    return (
        <>
    <div className='title'>Projects</div>   
    <Dropdown handleChange={handlechange} selectedProject={selectedProject} items={projectList}/>
    <TreeComponent draggable />
    </>
)};

const mapStateToProps = createStructuredSelector ({
    projectList: selectProjects,
    selectedProject:selectedProject
  });
  
  const mapDispatchToProps = dispatch => ({
    setSelectedProject:key => dispatch(setSelectedProject(key))
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProjectDropdown);