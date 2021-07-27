import { mount } from 'misc/test-utils';
import React from 'react';
import HelloWorld from 'src/pages/hello-world';

describe('HelloWorld', () => {
  before(() => {
    cy.intercept('GET', 'https://httpstat.us/200', {
      body: 'OK',
    });

    cy.intercept('GET', 'https://httpstat.us/400', {
      status: 400,
      body: 'Error',
    });
  });

  it.only('render no error', () => {
    mount(<HelloWorld />);
  });
});
