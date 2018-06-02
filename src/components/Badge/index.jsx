import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import './styles.css';

const badgeClasses = props =>
  cn('Badge', {
    [`Badge--${props.status}`]: props.status,
  });

const Badge = props => (
  <span className={badgeClasses(props)}>{props.text}</span>
);

Badge.propTypes = {
  text: PropTypes.string,
  status: PropTypes.oneOf(['error', 'warning', 'success', 'info', 'default']),
};

Badge.defaultProps = {
  text: '',
  status: 'default',
};

export default Badge;
