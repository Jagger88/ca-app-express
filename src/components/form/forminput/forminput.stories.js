import React from 'react';
import FormInput from './forminput.component';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Components/Form/Input',
  component: FormInput,
  decorators: [
    getStory => <BrowserRouter>{getStory()}</BrowserRouter>,
  ],
  argTypes: {
      handlechange:'',
      label:'',
      value:'',

  },
  };

const Template = (args) => <FormInput {...args} />;

export const Main = Template.bind({});
Main.args = {
    label:'Email',
    value:''

};