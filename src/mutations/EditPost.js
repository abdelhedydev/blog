import gql from 'graphql-tag';

const EDIT_POST = gql`
  mutation updatePost($title: String!,$body:String!,$id:ID!) {
   updatePost(data: {title: $title, body: $body},where: { id: $id }) {
    id
    title
    body
  }
  }
`;
export default EDIT_POST;
