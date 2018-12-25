
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer } from 'react-apollo';

const Switch = ({ edit }) => (
  <ApolloConsumer>
    {
      client => (
        <button className="toggle" onClick={() => client.writeData({ data: { isEditMode: !edit } })} type="button">
          {edit ? 'View' : 'Edit'}
        </button>
      )
    }
  </ApolloConsumer>
);
Switch.propTypes = {
  edit: PropTypes.bool.isRequired,
};

export default (Switch);
