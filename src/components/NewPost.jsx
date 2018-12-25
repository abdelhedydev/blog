import React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import ADD_POST from '../mutations/AddPost';

const NewPost = () => (
  <Mutation
    mutation={ADD_POST}
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
