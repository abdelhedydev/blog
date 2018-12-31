/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './App';

const defaultState = {
  isEditMode: false,
};

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjq25vrke5pd701drjsgxbjro/master',
  clientState: {
    defaults: defaultState,
    resolvers: {},
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
