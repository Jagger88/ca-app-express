import React from 'react';
import Header from './main-header.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/Header/main-header',
  component: Header,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ]
  };

const Template = (args) => <Header {...args} />;

export const Main = Template.bind({});

Main.args = {};