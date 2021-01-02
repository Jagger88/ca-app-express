import React from 'react';
import './projectcards.styles.scss';
import NewCard from '../cards/newcard.component';
import ItemCard from '../cards/itemcard.component';

// redux
import {connect} from 'react-redux';
import {setSelectedProject} from '../../redux/note/note.action';
import {createStructuredSelector} from 'reselect';
import {selectProjects} from '../../redux/note/note.selector';
// need to import router-dom
import {withRouter} from 'react-router-dom';


const ProjectCards = ({selectProjects,setSelectedProject, ...props}) => {
    function handleClick(e) {
      // console.log('Project : ' + e.currentTarget.id + ' was clicked');
      setSelectedProject(e.currentTarget.id);
      props.history.push('/ic');
    }

    function newClick(e) {
     alert('Future : Create New Project');
    }

    // console.log(selectedProject);
    return (
        <div className='projectcards'>
            <NewCard key = 'new' newClick={newClick} text='New Project'/>
            {selectProjects.map(project=> 
            <ItemCard onClick='' key={project.key} id={project.key} name={project.name} description={project.description} handleClick={handleClick} imageURL={project.imageURL}/>)}
        </div>
        )   
        

};
const mapStateToProps = createStructuredSelector ({
  selectProjects: selectProjects,
  });
  
  const mapDispatchToProps = dispatch => ({
    setSelectedProject:project => dispatch(setSelectedProject(project))
  });


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCards));


