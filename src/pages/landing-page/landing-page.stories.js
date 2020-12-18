import React from 'react';
import LandingPage from './landing-page.component';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  };

const Template = (args) => <LandingPage {...args} />;

export const Main = Template.bind({});

Main.args = {};