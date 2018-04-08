import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const pageBlockClasses = props =>
  cn('PageBlock', {
    [`PageBlock--${props.background}`]: props.background,
  });

const PageBlock = props => (
  <div className={pageBlockClasses(props)}>
    <div className="PageBlock-container">{props.children}</div>
  </div>
);

PageBlock.propTypes = {
  background: PropTypes.oneOf(['gray']),
  children: PropTypes.node.isRequired,
};

PageBlock.defaultProps = {
  background: null,
};

export default PageBlock;
