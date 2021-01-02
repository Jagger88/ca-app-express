import React from 'react';
import CardList from './card-list.component';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/root-reducer';

const store = createStore(rootReducer);

export default {
  title: 'Components/Cards/CardList',
  component: CardList,
  decorators: [
    getStory =>   <Provider store={store}>{getStory()}</Provider>,
  ],
  argTypes: {
  },
  };

const Template = (args) => <CardList {...args} />;

export const Main = Template.bind({});

Main.args = {};
