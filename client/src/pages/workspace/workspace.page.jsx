import React from 'react';
import './workspace.styles.scss';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';


// components
import VerticalNav from '../../components/sidepanels/verticalnav.component';
import TinyPage from '../../components/tiny/tinypage.component';
import ProjectDropdown from '../../components/dropdown/project-dropdown.component';
import RGrid from './rgrid.component';
import TableComponent from '../../components/datatables/table.component';


class Workspace extends React.Component {
  render(){
    const layout = [
      {i: 'a', x: 0, y: 1, w: 2, h: 2},
      {i: 'b', x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 3},
      {i: 'c', x: 3, y: 0, w: 10, h: 5},
      {i: 'd', x: 3, y: 0, w: 10, h: 5}
    ];
    return (
      <RGrid layout={layout} isDraggable={true} isResizable={true}>
        <div className='item' key="a"><ProjectDropdown/></div>
        <div className='item' key="b"><VerticalNav /></div>
        <div className='item' key="c"><TinyPage /></div>
        <div className='item' key="d"><TableComponent /></div>
      </RGrid>
    
    )
        
}};

export default Workspace;

