import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import './styles.css';

const textFieldClasses = props =>
  cn('TextField', {
    'has-value': props.value,
    'has-error': props.error,
  });

const TextField = props => (
  <Fragment>
    <div className={textFieldClasses(props)}>
      <input
        className="TextField-input"
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label className="TextField-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
    <p className="TextField-errorMsg">This is an error message</p>
  </Fragment>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

TextField.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  error: false,
};

export default TextField;
