import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import FieldError from '../FieldError';
import './styles.css';

const textFieldClasses = props =>
  cn('TextField', {
    'has-value': props.value,
    'has-error': props.error,
    'is-disabled': props.disabled,
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
        disabled={props.disabled}
      />
      <label className="TextField-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
    {props.error && <FieldError message={props.error} />}
  </Fragment>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'name', 'email', 'number']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

TextField.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  error: '',
};

export default TextField;
