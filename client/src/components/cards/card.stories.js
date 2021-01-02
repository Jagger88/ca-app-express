import React from 'react';
import Card from './card.component';


export default {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
    name:'Title',
    text:'jeep'
  },
  };

const Template = (args) => <Card {...args} />;

export const Main = Template.bind({});

Main.args = {};
