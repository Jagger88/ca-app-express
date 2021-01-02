import React from 'react';
import EditorPage from './editor-page.component';

export default {
  title: 'Pages/EditorPage',
  component: EditorPage,
  };

const Template = (args) => <EditorPage {...args} />;

export const Main = Template.bind({});

Main.args = {};