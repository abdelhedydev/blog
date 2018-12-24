import React from 'react';
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
  <Query query={GET_POST}>
    {
      ({ loading, data, error }) => {
        if (loading) return <p> loading ... </p>;
        if (error) return <p>Eroor </p>;
        const { posts } = data;
        return map(posts, post => <p>{post.title}</p>);
      }
    }
  </Query>
);

export default Posts;
