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
  <button type="button" className={buttonClasses(props)}>
    {props.text || props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
};

Button.defaultProps = {
  type: 'text',
  secondary: false,
  ghost: false,
};

export default Button;
