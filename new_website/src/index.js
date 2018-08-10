import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {login, changeNumber} from './reducers';
import 'tachyons';

const rootReducer = combineReducers({login, changeNumber})

const store = createStore(rootReducer); 

ReactDOM.render(
  <Provider store={store}>
      <App />  
  </Provider>,
    document.getElementById('root'));
registerServiceWorker();
