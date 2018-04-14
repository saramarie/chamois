import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const gridClasses = props =>
  cn({
    Grid: !props.item,
    'Grid-item': props.item,
    [`u-cols${props.cols}`]: props.cols && props.item,
  });

const Grid = props => (
  <div className={gridClasses(props)}>{props.children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.bool,
  cols: PropTypes.number,
};

Grid.defaultProps = {
  item: false,
  cols: 12,
};

export default Grid;
