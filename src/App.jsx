/* eslint-disable linebreak-style */
import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';

const App = () => (
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
);
export default App;
