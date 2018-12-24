import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjq25vrke5pd701drjsgxbjro/master',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <header>
          <Link to="/"><pre>||||GraphQL is Cool||||</pre></Link>
        </header>
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
