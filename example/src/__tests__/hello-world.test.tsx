import { mount } from 'misc/test-utils';
import React from 'react';
import HelloWorld from 'src/pages/hello-world';

describe('HelloWorld', () => {
  it('render no error', () => {
    mount(<HelloWorld />);
  });
});
