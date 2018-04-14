import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';
import 'typeface-merriweather';

import './styles.css';

const Card = props => {
  const cardClasses = cn('Card', {
    'Card--fullBleed': props.fullBleed,
  });

  return <div className={cardClasses}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  fullBleed: PropTypes.bool,
};

Card.defaultProps = {
  fullBleed: false,
};

export default Card;
