import React from 'react';
import StickyPage from './sticky-page.page';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Components/StickyPage',
  component: StickyPage,
  argTypes: {},
  };

const Template = (args) => <StickyPage {...args} />;

export const Main = Template.bind({});

Main.args = {data: 'Hello, this is the best thing since sliced bread<br>'};