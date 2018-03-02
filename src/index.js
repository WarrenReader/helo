import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import Routes from './routing/routes.js';
import './reset.css';

ReactDOM.render(
   <HashRouter>
      {Routes}
   </HashRouter>
   , document.getElementById('root'));
registerServiceWorker();
