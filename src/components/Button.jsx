import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background-color: #25CCF7;
    padding: 10px 15px;
    color: white;
    outline:none;
    font-size:20px;
    border: none;
    border-radius :20px;
    cursor:pointer;
    background-color:${props => (props.color ? props.color : '#FFFFFF')}; 
    color:${props => (props.color === '#FFFFFF' || !props.color ? 'black' : '#FFFFFF')}; 
`;

const Button = ({ title, color }) => (
  <ButtonWrapper color={color}>
    {title}
  </ButtonWrapper>
);
Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Button;
