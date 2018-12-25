import styled from 'styled-components';

const HeaderWrapper = WrappedComponent => styled(WrappedComponent)`
  background-color:#FEA47F;
  height: 10vh;
  position: relative;
  border-bottom:1px solid #CAD3C8;
  font-weight: bold;
  header{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 28px;
  }
  p{
    color: #F8EFBA;
    text-decoration:none;
  }
  a,a:active,a:visited{
    text-decoration:none;
  }
`;
export default HeaderWrapper;
