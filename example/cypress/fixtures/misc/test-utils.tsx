import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import placeholderStore from '../src/common/store';

const AllTheProviders = ({ children, store }: { children?: React.ReactNode; store?: Store }) => {
  return (
    <ThemeProvider>
      <Provider store={store || placeholderStore}>{children}</Provider>
    </ThemeProvider>
  );
};

export { AllTheProviders };
