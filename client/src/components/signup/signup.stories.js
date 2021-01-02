import React from 'react';
import SignUp from './signup.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/SignUp',
  component: SignUp,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ],
  argTypes: {
  },
  };

  
const Template = (args) => <SignUp {...args} />;

export const Main = Template.bind({});
Main.args = {

};