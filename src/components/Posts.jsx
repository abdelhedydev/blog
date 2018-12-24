/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { map } from 'lodash';
import gql from 'graphql-tag';

const GET_POST = gql`
{
    posts{
    id
    title
    body
  }
}
    `;
const Posts = () => (
  <div>
    <Link to="/post/new"><p>New Post ?</p></Link>
    <hr />
    <Query query={GET_POST}>
      {
        ({ loading, data, error }) => {
          if (loading) return <p> loading ... </p>;
          if (error) return <p>Eroor </p>;
          const { posts } = data;
          return map(posts, post => <Link to={`/post/${post.id}`}><p>{post.title}</p></Link>);
        }
      }
    </Query>
  </div>
);

export default Posts;
