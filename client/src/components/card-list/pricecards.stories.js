import React from 'react';
import PriceCards from './pricecards.component';

export default {
  title: 'Components/Cards/PriceCards',
  component: PriceCards,

  };

const Template = (args) => <PriceCards {...args} />;

export const Main = Template.bind({});

Main.args = {
  selectPlans:[{
    name: 'Standard',
    id: 'std1',
    price: 100,
    unit: '/month',
    currency: 'USD',
    buttontext: 'Get Standard',
    imageURL: '../../assets/workspace.png',
    description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
    features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>'
  },
  {
    name: 'Premium',
    id: 'prem1',
    price: 200,
    unit: 'USD/month',
    currency: 'USD',
    buttontext: 'Get Premium',
    imageURL: '../../assets/workspace.png',
    description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
    features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>'
  }]
};
