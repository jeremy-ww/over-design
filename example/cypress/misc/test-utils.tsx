import { mount as originalMount } from '@cypress/react';
import { Provider } from 'react-redux';
import store from 'src/common/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../src/common/query';

export function mount(jsx: React.ReactNode) {
  return originalMount(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{jsx}</Provider>
    </QueryClientProvider>,
  );
}
