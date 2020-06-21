import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Multi-Page plugin
import { BrowserRouter } from "react-router-dom"; 

//CSS
import './index.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();