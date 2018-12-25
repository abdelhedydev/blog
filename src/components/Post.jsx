import React from 'react';
import { map } from 'lodash';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import GET_POST from '../querries/GetPost';
import PostForm from './PostForm';

const Post = ({ match, className }) => (
  <div className={className}>
    <Query query={GET_POST} variables={{ id: match.params.id }}>
      {
        ({ error, data, loading }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return map(data, (post, key) => (
            <div key={key}>
              <PostForm postTitle={post.title} postBody={post.body} />
            </div>
          ));
        }
      }
    </Query>
  </div>
);
Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default Post;
