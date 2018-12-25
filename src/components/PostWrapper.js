import styled from 'styled-components';

const PostWrapper = WrappedComponent => styled(WrappedComponent)`
  font-weight: bold;
  position:relative;
  padding:20px 20%;
  .post{
    margin-bottom:15px;
    &-title{
      font-size:24px;
      color: #2C3A47;
    }
    &-body{
      font-size:20px;
      color: #182C61;
    }
  }
  .toggle{
    position:absolute;
    top:20px;
    right:20%;
  }

`;
export default PostWrapper;
