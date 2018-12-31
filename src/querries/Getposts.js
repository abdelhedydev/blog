import gql from 'graphql-tag';

const GET_POST = gql`
query allPosts($skip:Int){
    posts(orderBy:createdAt_DESC,first:1,skip:$skip){
    id
    title
    body
  }
} 
`;
export default GET_POST;
