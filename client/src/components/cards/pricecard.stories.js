import React from 'react';
import PriceCard from './pricecard.component';


export default {
  title: 'Components/Cards/PriceCard',
  component: PriceCard
  };

const Template = (args) => <PriceCard {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  name: 'Standard',
  id: 'std1',
  price: 100,
  unit: '/month',
  currency: 'USD',
  buttontext: 'Get Standard',
  imageURL: '../../assets/workspace.png',
  description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
  features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>',
  handleClick:''
};

export const Premium = Template.bind({});

Premium.args = {
  name: 'Premium',
  id: 'prem1',
  price: 200,
  unit: 'USD/month',
  currency: 'USD',
  buttontext: 'Get Premium',
  imageURL: '../../assets/workspace.png',
  description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
  features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>',
  handleClick:''
};
