import React from 'react'
import 'typeface-open-sans'

import SiteMenu from '../SiteMenu'
import './styles.css'

const SiteHeader = props => (
  <header className="SiteHeader">
    <div className="SiteHeader-container">
      <h1 className="SiteHeader-logo">
        <a href="/" className="SiteHeader-logo-link">
          {props.siteTitle}
        </a>
      </h1>
      <SiteMenu links={props.menuLinks} />
    </div>
  </header>
)

export default SiteHeader
