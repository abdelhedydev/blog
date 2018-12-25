/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import PostFormWrapper from './PostFormWrapper';
import Button from './Button';

const PostForm = ({
  createPost, className, postTitle, postBody, updatePost, isEditMode, id,
}) => (

  <form
    className={className}
    onSubmit={(e) => {
      e.preventDefault();
      const { title, body } = e.target;
      if (isEditMode) {
        updatePost({ variables: { title: title.value, body: body.value, id } });
      } else {
        createPost({ variables: { title: title.value, body: body.value } });
      }
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
);
PostForm.propTypes = {
  createPost: PropTypes.func,
  updatePost: PropTypes.func,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  postTitle: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  postBody: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  isEditMode: PropTypes.bool,
  id: PropTypes.string,

};
export default PostFormWrapper(PostForm);
