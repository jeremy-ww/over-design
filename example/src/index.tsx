import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'src/common/store';

const HelloWorld = React.lazy(() => import('src/pages/hello-world'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <React.Suspense fallback="Loading...">
          <HelloWorld />
        </React.Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
