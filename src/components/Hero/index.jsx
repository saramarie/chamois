import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import 'typeface-open-sans'
import 'typeface-merriweather'

import Button from '../Button'
import './styles.css'

const Hero = props => {
  const heroClasses = cn('Hero', {
    'Hero--centered': props.center,
    'Hero--bgGray': props.background === 'gray'
  })

  return (
    <div className={heroClasses}>
      <div className="Hero-container">
        <h2 className="Hero-title">
          {props.title}
        </h2>

        <p className="Hero-text">
          {props.text}
        </p>

        <Button>
          {props.ctaText}
        </Button>
      </div>
    </div>
  )
}

Hero.propTypes = {
  background: PropTypes.oneOf(['gray']),
  title: PropTypes.string,
  text: PropTypes.string,
  ctaText: PropTypes.string,
}

Hero.defaultProps = {
  background: null,
}

export default Hero
