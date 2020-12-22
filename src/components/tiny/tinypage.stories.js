import React from 'react';
import TinyPage from './tinypage.component';

export default {
  title: 'Components/TinyPage',
  component: TinyPage,
  };
 

const Template = (args) => <TinyPage {...args} />;

export const Main = Template.bind({});

Main.args = { 
  selectedNode:'0',
  activeContent:'Content'
};