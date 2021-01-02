import React from 'react';
import TinyPage from './tinypage.component';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/root-reducer';

const store = createStore(rootReducer);

export default {
  title: 'Components/Tiny/TinyPage',
  component: TinyPage,
  decorators: [
    getStory =>   <Provider store={store}>{getStory()}</Provider>,
  ],
  };
 

const Template = (args) => <TinyPage {...args} />;

export const Main = Template.bind({});

Main.args = { 
  selectedNode:'0',
  activeContent:'Content'
};