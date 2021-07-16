import { mount as originalMount } from '@cypress/react';
import { Provider } from 'react-redux';
import store from 'src/common/store';

export function mount(jsx: React.ReactNode) {
  return originalMount(<Provider store={store}>{jsx}</Provider>);
}
