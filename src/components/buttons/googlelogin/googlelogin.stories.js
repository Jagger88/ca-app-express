import React from 'react';
import GoogleLogin from './googlelogin.component';

export default {
  title: 'Components/Buttons/GoogleLogin',
  component: GoogleLogin
  };

const Template = (args) => <GoogleLogin {...args} />;

export const Main = Template.bind({});
Main.args = {
};
