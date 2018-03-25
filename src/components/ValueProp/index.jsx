import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './styles.css'

const ValueProp = props => {
  const valuePropClasses = cn('ValueProp', {
    [`ValueProp--${props.size}`]: props.size,
    'ValueProp--centered': props.center
  })

  return (
    <div className={valuePropClasses}>
      <p className="ValueProp-title">
        {props.title}
      </p>
      <p className="ValueProp-text">
        {props.text}
      </p>
    </div>
  )
}

ValueProp.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  center: PropTypes.bool,
}

ValueProp.defaultProps = {
  center: false
}

export default ValueProp
