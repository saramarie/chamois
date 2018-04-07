import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import './styles.css';

const textFieldClasses = props =>
  cn('TextField', {
    'has-value': props.value,
  });

const TextField = props => (
  <div className={textFieldClasses(props)}>
    <input
      className="TextField-input"
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
    />
    <label className="TextField-label" htmlFor={props.id}>
      {props.label}
    </label>
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  value: PropTypes.string,
};

TextField.defaultProps = {
  name: '',
  value: '',
};

export default TextField;
