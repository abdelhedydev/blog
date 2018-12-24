import gql from 'graphql-tag';

const GET_POST = gql`
{
    posts{
    id
    title
    body
  }
} 
`;
export default GET_POST;
