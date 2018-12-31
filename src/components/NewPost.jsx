import React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import ADD_POST from '../mutations/AddPost.graphql';
import GET_POSTS from '../querries/Getposts.graphql';

const NewPost = () => (
  <Mutation
    mutation={ADD_POST}
    update={(cache, { data: { createPost } }) => {
      const { posts } = cache.readQuery({ query: GET_POSTS });
      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: [createPost].concat(posts) },
      });
    }}
  >
    {(createPost, { data }) => (
      !data ? (
        <PostForm createPost={createPost} />
      )
        : (
          <Redirect to="/" />
        )
    )}
  </Mutation>
);
export default NewPost;
