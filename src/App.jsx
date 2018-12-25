/* eslint-disable linebreak-style */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';

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

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route component={Posts} exact path="/" />
          <Route component={NewPost} exact path="/post/new" />
          <Route component={Post} path="/post/:id" />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);
export default App;
