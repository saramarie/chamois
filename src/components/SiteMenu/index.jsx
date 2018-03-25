import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-open-sans'

import './styles.css'

const SiteMenu = props => (
  <nav className="SiteMenu">
    {props.links.map(link => (
      <a
        href={link.url}
        className="SiteMenu-item"
        key={link.name}
      >
        {link.name}
      </a>
    ))}
  </nav>
)

SiteMenu.propTypes = {
  links: PropTypes.array.isRequired,
}

export default SiteMenu
