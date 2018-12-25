/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import PostsWrapper from './PostsWrapper';
import GET_POSTS from '../querries/Getposts';
import Button from './Button';

const Posts = ({ className }) => (
  <div className={className}>
    <Link to="/post/new">
      <div className="post-button-new">
        <Button color="#25CCF7" title="New Post ?" />
      </div>
    </Link>
    <div className="posts">
      <Query query={GET_POSTS}>
        {
          ({
            loading, data, error, fetchMore,
          }) => {
            if (loading) return <p> loading ... </p>;
            if (error) return <p>Eroor </p>;
            const { posts } = data;
            return (
              <React.Fragment>
                {
                  map(posts, (post, key) => (
                    <div key={key} className="post">
                      <Link to={`/post/${post.id}`}>
                        <p className="post-title">{post.title}</p>
                      </Link>
                    </div>
                  ))
                }
                <button
                  onClick={() => fetchMore({
                    variables: {
                      skip: posts.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        posts: [...prev.posts, ...fetchMoreResult.posts],
                      });
                    },
                  })}
                  type="submit"
                >
                  Load More
                </button>
              </React.Fragment>
            );
          }
        }
      </Query>
    </div>
  </div>
);
Posts.propTypes = {
  className: PropTypes.string.isRequired,
};
export default PostsWrapper(Posts);
