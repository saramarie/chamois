import React from 'react'
import PropTypes from 'prop-types'

import ValueProp from '../ValueProp'
import utils from './utils'
import './styles.css'

const ValuePropSection = ({ valueProps, columns, center }) => (
  <div className="ValuePropSection">
    <div className="ValuePropSection-container">
      {valueProps.map(valueProp => (
        <ValueProp
          key={valueProp.id}
          title={valueProp.title}
          text={valueProp.text}
          size={utils.setSize(columns || valueProps.length)}
          center={center}
        />
      ))}
    </div>
  </div>
)

ValuePropSection.props = {
  valueProps: PropTypes.array,
  columns: PropTypes.number,
  center: PropTypes.bool
}

ValuePropSection.defaultProps = {
  valueProps: [],
  columns: null,
  center: false
}

export default ValuePropSection
