import { mount } from 'misc/test-utils';
import React from 'react';
import HelloWorld from 'src/pages/hello-world';

describe('HelloWorld', () => {
  before(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1', {
      fixture: 'todos.json',
    });
  });

  it.only('render no error', () => {
    mount(<HelloWorld />);
  });
});
