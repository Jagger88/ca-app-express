import React from 'react';
import './card-list.styles.scss';
import Card from '../cards/card.component';
// redux
import {connect} from 'react-redux';
import {setCurrentNode} from '../../redux/note/note.action';
import {createStructuredSelector} from 'reselect';
import {selectedProject} from '../../redux/note/note.selector';

const CardList = ({selectedProject,setCurrentNode}) => {
    console.log(selectedProject);
    return (
        <div className='card-list'>
            {selectedProject.content.map(content=> 
            <Card key={content.key} name={content.key} text={content.value} />)}
        </div>
        )   
        

};
const mapStateToProps = createStructuredSelector ({
    selectedProject: selectedProject,
  });
  
  const mapDispatchToProps = dispatch => ({
    setCurrentNode:info => dispatch(setCurrentNode(info))
  });


export default  connect(mapStateToProps, mapDispatchToProps)(CardList);


