import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './comp/scroll-to-top/ScrollToTop';
import * as serviceWorker from './serviceWorker';

//Multi-Page plugin
import { BrowserRouter } from "react-router-dom"; 

//CSS
import './index.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter >
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();