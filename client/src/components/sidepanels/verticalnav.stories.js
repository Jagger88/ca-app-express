import React from 'react';
import VerticalNav from './verticalnav.component';

export default {
  title: 'Components/Panel/VerticalNav',
  component: VerticalNav
  };

const Template = (args) => <VerticalNav {...args} />;

export const Main = Template.bind({});
Main.args = {
};
