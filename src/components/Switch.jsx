/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer } from 'react-apollo';

const Switch = ({ className, edit }) => (
  <div className={className}>
    <ApolloConsumer>
      {
        client => (
          <button className="toggle" onClick={() => client.writeData({ data: { isEditMode: !edit } })}>
            {edit ? 'View' : 'Edit'}
          </button>
        )
      }
    </ApolloConsumer>
  </div>
);
Switch.propTypes = {
  className: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default (Switch);
