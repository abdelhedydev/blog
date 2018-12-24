import gql from 'graphql-tag';

const ADD_POST = gql`
  mutation addPost($title: String!,$body:String!) {
   createPost(data: {title: $title, body: $body,status:PUBLISHED}) {
    id
    title
    body
  }
  }
`;
export default ADD_POST;
