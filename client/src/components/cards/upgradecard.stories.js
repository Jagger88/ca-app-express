import React from 'react';
import UpgradedCard from './upgradecard.component';


export default {
  title: 'Components/Cards/UpgradeCard',
  component: UpgradedCard,
  argTypes: {
    name:'Title',
    text:'jeep'
  },
  };

const Template = (args) => <UpgradedCard {...args} />;

export const Main = Template.bind({});

Main.args = {};
