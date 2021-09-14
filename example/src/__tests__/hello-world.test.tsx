import { mount } from 'misc/test-utils';
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
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

    cy.stub(ReactRouterDOM, 'useHistory').returns({
      push: () => {
        console.info('disable history push in testing environment.');
      },
    });
  });

  it.only('render no error', () => {
    mount(<HelloWorld />);
  });
});