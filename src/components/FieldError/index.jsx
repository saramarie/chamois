import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-open-sans';

import './styles.css';

const FieldError = props => <p className="FieldError">{props.message}</p>;

FieldError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FieldError;
