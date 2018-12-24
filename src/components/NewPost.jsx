import React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import ADD_POST from '../mutations/AddPost';

const NewPost = () => (
  <Mutation
    mutation={ADD_POST}
  >
    {(createPost, { data }) => (
      !data ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { title, body } = e.target;
            createPost({ variables: { title: title.value, body: body.value } });
          }}
        >
          <div>
            <p>Your Title heare</p>
            <input type="text" placeholder="tilte" name="title" />
          </div>
          <div>
            <p>Your Article heare</p>
            <textarea type="text" placeholder="tilte" name="body" />
          </div>
          <button type="submit">Add Todo</button>
        </form>
      )
        : (
          <Redirect to="/" />
        )
    )}
  </Mutation>
);
export default NewPost;
