import React from 'react'
import cn from 'classnames'

import Copyright from '../Copyright'
import './styles.css'

const Footer = props => {
  const footerClasses = cn('Footer', {
    'Footer--center': props.center
  })

  return (
    <footer className={footerClasses}>
      <Copyright />
    </footer>
  )
}

export default Footer
