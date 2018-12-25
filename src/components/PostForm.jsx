/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import PostFormWrapper from './PostFormWrapper';
import Button from './Button';

const PostForm = ({
  createPost, className, postTitle, postBody,
}) => (
  <div className={className}>
    <form onSubmit={(e) => {
      e.preventDefault();
      const { title, body } = e.target;
      createPost({ variables: { title: title.value, body: body.value } });
    }}
    >
      <div>
        <p>Your Title heare</p>
        <input type="text" placeholder="tilte" name="title" defaultValue={postTitle} />
      </div>
      <div>
        <p>Your Article heare</p>
        <textarea type="text" placeholder="tilte" name="body" defaultValue={postBody} />
      </div>
      <Button type="submit" color="#55E6C1" title="Submit" />
    </form>
  </div>
);
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  postTitle: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  postBody: PropTypes.string,
};
export default PostFormWrapper(PostForm);
