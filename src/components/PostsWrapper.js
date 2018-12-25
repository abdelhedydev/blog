import styled from 'styled-components';

const PostsWrapper = WrappedComponent => styled(WrappedComponent)`
  font-weight: bold;
  position:relative;
  padding:20px 20%;
  .post-button-new{
    position: absolute;
    right : 20%;
    top : 20px;
  }
  .post{
    border:1px solid #2C3A47;
    width : 80%;
    margin-bottom:15px;
    padding:10px;
    transition:.2s all;
    &:hover{
      background-color: #CAD3C8;
    }
    &-title{
      font-size:24px;
      color: #2C3A47;
    }
    &-body{
      font-size:20px;
      color: #182C61;
    }
  }
  a,a:active,a:visited{
    text-decoration:none;
  }
`;
export default PostsWrapper;
