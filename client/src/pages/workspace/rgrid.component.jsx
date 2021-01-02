import React from 'react';
import './rgrid.styles.scss';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

// components
import GridLayout from 'react-grid-layout';

const RGrid = ({layout, children, isResizable, isDraggable}) => {
function Dothis (e) {
  console.log('layout changed');
  console.log(e); // this is the layout in array format. You can save this to the layout for future...
}

        return (
      <GridLayout className="layout mygrid" layout={layout} 
      isDraggable={isDraggable} isResizable={isResizable}
      cols={12} rowHeight={100} width={1200}
      onLayoutChange= {Dothis}
      >
        {children}
      </GridLayout>
    )
        
};

export default RGrid;

