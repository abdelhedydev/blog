import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderWraper from './HeaderWrapper';

const Header = ({ className }) => (
  <div className={className}>
    <header>
      <Link to="/"><p>||||GraphQL is Cool||||</p></Link>
    </header>
  </div>
);
Header.propTypes = {
  className: PropTypes.string.isRequired,
};
export default HeaderWraper(Header);
