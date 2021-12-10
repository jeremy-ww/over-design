import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from 'src/common/store';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
    fallbackLng: 'en',
    load: 'currentOnly',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/over-design/locales/{{lng}}/{{ns}}.json',
    },
  });

const HelloWorld = React.lazy(() => import('src/pages/hello-world'));
const DataURL = React.lazy(() => import('src/pages/data-url'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="Loading...">
        <Router basename="/over-design">
          <Switch>
            <Route path="/" exact>
              <HelloWorld />
            </Route>
            <Route path="/data-url">
              <DataURL />
            </Route>
          </Switch>
        </Router>
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
