import styled from 'styled-components';

const PostFormWrapper = WrappedComponent => styled(WrappedComponent)`
  padding: 20px 20%;
  p{
    font-size:26px;
    font-weight:bold;
  }
  input,textarea{
    width: 80%;
    font-size:24px;
    margin-bottom: 15px;
  }
  textarea{
    height:30vh;
  }
`;
export default PostFormWrapper;
