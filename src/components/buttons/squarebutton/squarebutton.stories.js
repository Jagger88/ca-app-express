import React from 'react';
import SquareButton from './squarebutton.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/Buttons/SquareButton',
  component: SquareButton,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  };

const Template = (args) => <SquareButton {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  children:'Submit',
  type:'submit',
};

export const Login = Template.bind({});
Login.args = {
  children:'Login',
  backgroundColor: 'rgba(86,72,156,1)'
};