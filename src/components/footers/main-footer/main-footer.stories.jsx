import React from 'react';
import Footer from './main-footer.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/Footers/main-footer',
  component: Footer,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ]
  };

const Template = (args) => <Footer {...args} />;

export const Main = Template.bind({});

Main.args = {};