import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Multi-Page plugin
import { HashRouter } from "react-router-dom"; 

//CSS
import './index.css';

import App from './App';

ReactDOM.render(
  <HashRouter >
    <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();