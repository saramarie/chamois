import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import FieldError from '../FieldError';
import ChevronIcon from './assets/chevron.svg';
import './styles.css';

const selectFieldClasses = props =>
  cn('SelectField', {
    'has-error': props.error,
  });

const SelectField = props => (
  <Fragment>
    <div className={selectFieldClasses(props)}>
      <select
        className="SelectField-input"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label htmlFor={props.id} className="SelectField-label">
        {props.label}
      </label>
      <svg className="SelectField-icon">
        <use xlinkHref={`${ChevronIcon}#chevron`} />
      </svg>
    </div>
    {props.error && <FieldError message={props.error} />}
  </Fragment>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
};

SelectField.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  options: [],
  error: '',
};

export default SelectField;
