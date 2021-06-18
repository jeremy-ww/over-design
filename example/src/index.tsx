import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/common/store';

import HelloWorld from 'src/pages/hello-world';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.querySelector('#root'),
);
