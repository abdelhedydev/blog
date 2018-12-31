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
  .likes{
    display:inline-flex;
    justify-content:space-around;
    &-add{
      background-image:url('https://image.flaticon.com/icons/svg/511/511217.svg');
      background-position:center;
      background-repeat:no-repeat;
    }
    &-del{
      background-image:url('https://image.flaticon.com/icons/svg/126/126098.svg');
      background-position:center;
      background-repeat:no-repeat;
    }
  }
  .btn{
    height:25px;
    width:40px;
    border:none;
    background-color:transparent;
    outline:none;
  }
  .read{
    border-top:1px solid #CAD3C8;
    padding-top:5px;
    input{
      margin-left:10px;
    }
  }

`;
export default PostWrapper;
