import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const gridClasses = props =>
  cn({
    Grid: !props.item,
    'Grid-item': props.item,
    [`u-lg-cols${props.largeCols}`]: props.largeCols && props.item,
    [`u-sm-cols${props.smallCols}`]: props.smallCols && props.item,
  });

const Grid = props => (
  <div className={gridClasses(props)}>{props.children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.bool,
  largeCols: PropTypes.number,
  smallCols: PropTypes.number,
};

Grid.defaultProps = {
  item: false,
  largeCols: 12,
  smallCols: 12,
};

export default Grid;
