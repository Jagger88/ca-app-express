import React from 'react';
import Dropdown from './dropdown.component';


export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
  argTypes: {
    id:'1',
    items:[
      {key: '0',
      name: 'My First Project'},
      {key: '1',
      name: 'My Second Project'}]
  }
  };

const Template = (args) => <Dropdown {...args} />;

export const Main = Template.bind({});

Main.args = {
  id:'1',
  items:[
    {key: '0',
    name: 'My First Project'},
    {key: '1',
    name: 'My Second Project'}]
};
