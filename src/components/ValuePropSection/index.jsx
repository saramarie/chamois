import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import ValueProp from '../ValueProp';
import './styles.css';

const ValuePropSection = ({ valueProps, columns, center }) => (
  <div className="ValuePropSection">
    <div className="ValuePropSection-container">
      <Grid>
        {valueProps.map(valueProp => (
          <Grid item largeCols={12 / columns}>
            <ValueProp
              key={valueProp.id}
              title={valueProp.title}
              text={valueProp.text}
              center={center}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

ValuePropSection.props = {
  valueProps: PropTypes.array,
  columns: PropTypes.number,
  center: PropTypes.bool,
};

ValuePropSection.defaultProps = {
  valueProps: [],
  columns: 3,
  center: false,
};

export default ValuePropSection;
