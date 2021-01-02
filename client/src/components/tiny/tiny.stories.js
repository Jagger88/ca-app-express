import React from 'react';
import TMCE from './tiny.component';

export default {
  title: 'Components/Tiny/TinyDemo',
  component: TMCE,
  };

const Template = (args) => <TMCE {...args} />;

export const Main = Template.bind({});

Main.args = {};