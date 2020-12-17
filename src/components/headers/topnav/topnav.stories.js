import React from 'react';
import Topnav from './topnav.component';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Components/Topnav',
  component: Topnav,
  argTypes: {},
  };

const Template = (args) => <Topnav {...args} />;

export const Main = Template.bind({});

Main.args = {};