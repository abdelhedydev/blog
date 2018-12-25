import styled from 'styled-components';

const PostFormWrapper = WrappedComponent => styled(WrappedComponent)`
  padding: 20px 20%;
  p{
    font-size:26px;
  }
  input,textarea{
    font-size:24px;
    margin-bottom: 15px;
  }
`;
export default PostFormWrapper;
