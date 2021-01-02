// provider.js - for storybook

import React from 'react'
import { Router } from 'react-router'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <BrowserRouter>
        <Router>
        { children }
        </Router>
    </BrowserRouter>
  </Provider>
)

export default ProviderWrapper