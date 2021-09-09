import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'src/common/store';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/over-design/locales/{{lng}}/{{ns}}.json',
    },
  });

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
