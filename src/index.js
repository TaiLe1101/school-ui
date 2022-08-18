import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import GlobalStyles from './components/GlobalStyles';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </React.StrictMode>
  </Provider>
);
