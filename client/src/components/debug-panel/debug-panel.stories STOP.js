import React from 'react';
import DebugPanel from './debug-panel.component';
// HOCs required for decorator 
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';

export default {
  title: 'Components/DebugPanel',
  component: DebugPanel,
  decorators: [
    getStory =><Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}> 
        {getStory()}
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  ]
  };

const Template = (args) => <DebugPanel {...args} />;

export const Main = Template.bind({});
Main.args = {
  debug:'<p>This is the debug content that we want to keep alive</p><p>This is thfdgjusdf sdfogijdfg sdofi dsfiogn dsfgondsi gfdoinsd fg</p>'
};
