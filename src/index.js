import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import { createStore } from 'redux';
import CombinedReducers from 'redux/reducers/CombinedReducers';

const store = createStore(CombinedReducers);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);