import React from 'react';
import TreeComponent from './rtree2.component';

export default {
  title: 'Components/Tree/Tree2',
  component: TreeComponent,
  argTypes: {
    draggable: false,
    gData: [],
    CustomIcon: false,
  }
  };

  
const Template = (args) => <TreeComponent {...args} />;

export const Main = Template.bind({});
Main.args = {
  draggable: false,
  CustomIcon: false,
  gData: [
    { title: '0-0', key: '0', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
    { title: '0-1', key: '1'},
    { title: '0-2', key: '2'},
    { title: '0-3', key: '3'},
    { title: '0-4', key: '4'},
    { title: '0-5', key: '5'},
    { title: '0-6', key: '6'},
  ]
};

export const Data = Template.bind({});
Data.args = {
  draggable: true,
  gData: [
      { title: '0-0', key: '0'},
      { title: '0-1', key: '1', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
      { title: '0-2', key: '2'},
      { title: '0-3', key: '3'},
      { title: '0-4', key: '4'},
      { title: '0-5', key: '5'},
      { title: '0-6', key: '6'},
  ]
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  draggable: true,
  CustomIcon: (<span className='customize-icon'>x</span>),
  gData: [
    { title: '0-0', key: '0'},
    { title: '0-1', key: '1'},
    { title: '0-2', key: '2', children: [{ title: 'A', key: 'A' },{ title: 'B', key: 'B' }]},
    { title: '0-3', key: '3'},
    { title: '0-4', key: '4', children: [{ title: 'C', key: 'C' },{ title: 'D', key: 'D' }]},
    { title: '0-5', key: '5'},
    { title: '0-6', key: '6'},
  ]
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  draggable: true,
  CustomIcon: false,
  gData: [
    { title: '0-0', key: '0-0' },
    { title: '0-1', key: '0-1' },
    { title: '0-2', key: '0-2', children: [{ title: '0-2-0', key: '0-2-0' }] },
  ]
};