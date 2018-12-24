import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Posts from './components/Posts';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjq25vrke5pd701drjsgxbjro/master',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Posts />
    </div>
  </ApolloProvider>
);
export default App;
