/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { map } from 'lodash';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const GET_POST = gql`
query post($id: ID!){
   post(where : { id: $id }) {
    id
    body
    title
  }
}
`;

const Post = ({ match }) => (
  <Query query={GET_POST} variables={{ id: match.params.id }}>
    {
      ({ error, data, loading }) => {
        if (loading) return <p>loading</p>;
        if (error) return <p>error</p>;
        return map(data, (post, key) => <p key={key}>{post.title}</p>);
      }
    }
  </Query>
);
Post.propTypes = {
  match: PropTypes.object,
};

export default Post;
