import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Multi-Page plugin
import {BrowserRouter as Router} from "react-router-dom"; 


//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(
  <Router >
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();