import React from 'react';
import ItemCard from './itemcard.component';


export default {
  title: 'Components/Cards/ItemCard',
  component: ItemCard
  };

const Template = (args) => <ItemCard {...args} />;

export const Main = Template.bind({});

Main.args = {imageURL: '../../assets/workspace.png',
name: 'My First Project',
description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.'
};
