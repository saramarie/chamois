import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import './styles.css';

const buttonClasses = props =>
  cn('Button', {
    'Button--secondary': props.secondary,
    'Button--ghost': props.ghost,
    'Button--fullWidth': props.fullWidth,
    'Button--small': props.small,
  });

const Button = props => (
  <button
    type={props.type}
    onClick={props.onClick}
    className={buttonClasses(props)}
    disabled={props.disabled}
  >
    {props.text || props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  small: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'text',
  disabled: false,
  secondary: false,
  ghost: false,
  small: false,
  onClick: () => {},
};

export default Button;
