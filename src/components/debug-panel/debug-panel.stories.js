import React from 'react';
import DebugPanel from './debug-panel.component';


export default {
  title: 'Components/DebugPanel',
  component: DebugPanel
  };

const Template = (args) => <DebugPanel {...args} />;

export const Main = Template.bind({});
Main.args = {
  debug:'<p>This is the debug content that we want to keep alive</p><p>This is thfdgjusdf sdfogijdfg sdofi dsfiogn dsfgondsi gfdoinsd fg</p>'
};
