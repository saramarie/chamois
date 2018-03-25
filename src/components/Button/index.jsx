import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-open-sans'

import './styles.css'

const Button = props => (
  <button type="button" className="Button">
    {props.text || props.children}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}

export default Button
