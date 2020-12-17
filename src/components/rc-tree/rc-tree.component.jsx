import React from 'react';

import Tree from 'rc-tree';
import './rc-tree.styles.scss';


const STYLE = `
.rc-tree-child-tree {
  display: inline-block;
}

.node-motion {
  transition: all .3s;
  overflow-y: hidden;
}
`;

const motion = {
  motionName: 'node-motion',
  motionAppear: false,
  onAppearStart: node => {
    console.log('Start Motion:', node);
    return { height: 0 };
  },
  onAppearActive: node => ({ height: node.scrollHeight }),
  onLeaveStart: node => ({ height: node.offsetHeight }),
  onLeaveActive: () => ({ height: 0 }),
};

// local data instead of importing
// const gData =  gData: [
  //   { title: '0-0', key: '0', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
  //   { title: '0-1', key: '1'},
  //   { title: '0-2', key: '2'},
  //   { title: '0-3', key: '3'},
  //   { title: '0-4', key: '4'},
  //   { title: '0-5', key: '5'},
  //   { title: '0-6', key: '6'},
  // ];

class TreeComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gData: props.gData,
            draggable: props.draggable,
            autoExpandParent: true,
            expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
            // icon needs to be sent in wrapped in brackets.
            // as such  (<span className='customize-icon'>x</span>), 
            icon: props.CustomIcon
        }
    }


  onDragEnter = ({ expandedKeys }) => {
    console.log('enter', expandedKeys);
    this.setState({
      expandedKeys,
    });
  };

  onDrop = info => {
    console.log('drop', info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          callback(item, index, arr);
          return;
        }
        if (item.children) {
          loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
      });
    } else {
      // Drop on the gap
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

  this.setState({
      gData: data,
    });
  };

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onSelect = (selectedKeys, info) => {
    console.log(selectedKeys);
    console.log('Selected: ' + info.node.key + ' in position ' + info.node.pos);

    // console.log('selected', selectedKeys, info);

    // this.selKey = info.node.props.eventKey;
  };

  //, e:{selected: bool, selectedNodes, node, event, nativeEvent})
  

  render() {
    const { expandedKeys } = this.state;
    const switcherIcon = obj => {
        if (!obj.isLeaf) {
        return (<span>X</span>);
      }};
  
    return (
      <div className="draggable-demo">
        <style dangerouslySetInnerHTML={{ __html: STYLE }} />
        <Tree
          expandedKeys={expandedKeys}
          onExpand={this.onExpand}
          //checkable
          autoExpandParent={this.state.autoExpandParent}
          // sets whether you can drag or not
          draggable={this.state.draggable}
          onDragStart={this.onDragStart}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          // this is for selection
          onSelect={this.onSelect}
          treeData={this.state.gData}
          motion={motion}
          icon={this.state.icon}
          //switcherIcon={switcherIcon}
        />
      </div>
    );
  }
}

export default TreeComponent;


