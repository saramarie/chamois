import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import './styles.css';

const buttonClasses = props =>
  cn('Button', {
    'Button--secondary': props.secondary,
    'Button--ghost': props.ghost,
  });

const Button = props => (
  <button
    type={props.type}
    onClick={props.onClick}
    className={buttonClasses(props)}
  >
    {props.text || props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'text',
  secondary: false,
  ghost: false,
  onClick: () => {},
};

export default Button;
