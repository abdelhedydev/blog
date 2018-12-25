import gql from 'graphql-tag';

const GET_POST = gql`
query post($id: ID!){
   post(where : { id: $id }) {
    id
    body
    title
  }
  isEditMode @client
}
`;
export default GET_POST;
