import React from 'react';
import SignIn from './signin.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/SignIn',
  component: SignIn,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ],
  argTypes: {
  },
  };

  
const Template = (args) => <SignIn {...args} />;

export const Main = Template.bind({});
Main.args = {

};