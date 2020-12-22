import React from 'react';
// import { gData } from './utils/dataUtil';
import Tree from 'rc-tree';
// import STYLE from './rctree.scss';


import './rctree.scss';

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
    };
    
  onDragEnter = ({ expandedKeys }) => {
    //console.log('enter', expandedKeys);
    this.setState({
      expandedKeys,
    });
  };


  onDrop = info => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
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
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
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

  // rc-tree default action for node selection
  onSelect = (selectedKeys, info) => {
    // console.log('Selected: ' + info.node.key + ' in position ' + info.node.pos);
    // // you need to define the const from the props to bring a function from outside into the class
    // // in a const component you just add it to the parameters during definition.
    // // const {setCurrentNode} = this.props;
    // this.props.setCurrentNode(info.node.key);
  };

  render() {
    const { expandedKeys } = this.state;

    return (
      <div className="rc-tree">
        {/* <style dangerouslySetInnerHTML={{ __html: STYLE }} /> */}
        <Tree className="rc-tree"
          // blockNode
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
        />
      </div>
    );
  }
}

export default TreeComponent;


