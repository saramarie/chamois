import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import FieldError from '../FieldError';
import './styles.css';

const boxFieldClasses = props =>
  cn('BoxField', {
    'has-error': props.error,
  });

const BoxField = props => (
  <Fragment>
    <div className={boxFieldClasses(props)}>
      <textarea
        className="BoxField-input"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor="test" className="BoxField-label">
        {props.label}
      </label>
    </div>
    {props.error && <FieldError message={props.error} />}
  </Fragment>
);

BoxField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

BoxField.defaultProps = {
  label: '',
  value: '',
  error: '',
  onChange: () => {},
};

export default BoxField;
