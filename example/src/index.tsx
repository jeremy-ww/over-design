import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/common/store';

const HelloWorld = React.lazy(() => import('src/pages/hello-world'));

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback="Loading...">
      <HelloWorld />
    </React.Suspense>
  </Provider>,
  document.querySelector('#root'),
);
