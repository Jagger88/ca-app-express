import React from 'react';
import ProjectCards from './projectcards.component';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/root-reducer';

const store = createStore(rootReducer);

export default {
  title: 'Components/Cards/ProjectCards',
  component: ProjectCards,
  decorators: [
    getStory =>   <Provider store={store}>{getStory()}</Provider>,
  ],
  };

const Template = (args) => <ProjectCards {...args} />;

export const Main = Template.bind({});

Main.args = {};
