/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import GET_POST from '../querries/GetPost';
import PostForm from './PostForm';
import PostWrapper from './PostWrapper';
import EditPost from '../mutations/EditPost';
import Switch from './Switch';

const EDIT_POST_CHECK = gql`
  mutation updatePost($check:Boolean ,$id:ID!) {
   updatePost(data: {check: $check},where: { id: $id }) {
    check
  }
  }
`;

const Post = ({ match, className }) => (
  <div className={className}>
    <Query query={GET_POST} variables={{ id: match.params.id }}>
      {
        ({ data, loading }) => {
          if (loading) return <p>loading</p>;
          const { post, isEditMode } = data;
          return (
            <div>
              <Switch edit={isEditMode} />
              {
                isEditMode
                  ? (
                    <Mutation mutation={EditPost}>
                      {
                        (updatePost, result) => (
                          <PostForm
                            postTitle={post.title}
                            id={post.id}
                            postBody={post.body}
                            updatePost={updatePost}
                            results={result}
                            isEditMode
                          />
                        )
                      }
                    </Mutation>
                  ) : (
                    <div className="post">
                      <pre>{post.id}</pre>
                      <p className="post-title">{post.title}</p>
                      <p className="post-body">{post.body}</p>
                      <Mutation
                        mutation={EDIT_POST_CHECK}
                        variables={{
                          id: post.id,
                          check: !post.check,
                        }}
                        optimisticResponse={{
                          __typename: 'Mutation',
                          updataPost: {
                            __typename: 'Post',
                            check: !post.check,
                          },
                        }}
                        update={(cache, { data: { updataPost } }) => {
                          const oldData = cache.readQuery({
                            query: GET_POST,
                            variables: { id: post.id },
                          });
                          console.log('updaPost', updataPost);
                          oldData.post.check = updataPost.check;
                          cache.writeQuery({
                            query: GET_POST,
                            data: {
                              ...data,
                              post: oldData.post,
                            },
                          });
                        }
                        }
                      >
                        {
                          updatePost => (
                            <input
                              type="checkbox"
                              checked={post.check}
                              onChange={updatePost}
                              style={{ height: '50px', width: '55px' }}
                            />
                          )
                        }
                      </Mutation>
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
