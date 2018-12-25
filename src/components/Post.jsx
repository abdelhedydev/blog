/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import GET_POST from '../querries/GetPost';
import PostForm from './PostForm';
import PostWrapper from './PostWrapper';
import Switch from './Switch';

const Post = ({ match, className }) => (
  <div className={className}>
    <Query query={GET_POST} variables={{ id: match.params.id }}>
      {
        ({ error, data, loading }) => {
          if (loading) return <p>loading</p>;
          if (error) console.log('error', error);
          const { post, isEditMode } = data;
          return (
            <div>
              <Switch edit={isEditMode} />
              {
                isEditMode
                  ? <PostForm postTitle={post.title} postBody={post.body} />
                  : (
                    <div className="post">
                      <pre>{post.id}</pre>
                      <p className="post-title">{post.title}</p>
                      <p className="post-body">{post.body}</p>
                    </div>
                  )}
            </div>
          );
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

export default PostWrapper(Post);
