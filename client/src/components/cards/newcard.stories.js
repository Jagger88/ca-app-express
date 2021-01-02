import React from 'react';
import NewCard from './newcard.component';


export default {
  title: 'Components/Cards/NewCard',
  component: NewCard,
  argTypes: {
    text: ''
  },
  };

const Template = (args) => <NewCard {...args} />;

export const NewProject = Template.bind({});

NewProject.args = {  text: 'New Project'};

export const NewGroup = Template.bind({});

NewGroup.args = {  text: 'New Group'};

