import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import Routes from './routing/routes.js';
import './reset.css';
import {Provider} from 'react-redux';
import store from './redux/store.js';

ReactDOM.render(
   <HashRouter>
      <Provider store={store}>
      {Routes}
      </Provider>
   </HashRouter>
   , document.getElementById('root'));
registerServiceWorker();
