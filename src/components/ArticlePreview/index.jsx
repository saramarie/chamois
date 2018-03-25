import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import 'typeface-open-sans'
import 'typeface-merriweather'

import './styles.css'

const ArticlePreview = props => {
  const articlePreviewClasses = cn('ArticlePreview', {
    [`ArticlePreview--${props.size}`]: true
  })

  return (
    <article className={articlePreviewClasses}>
      <header className="ArticlePreview-header">
        {props.datePublished && (
          <p className="ArticlePreview-date">
            {props.datePublished}
          </p>
        )}

        <h3 className="ArticlePreview-title">
          <a href={props.url} className="ArticlePreview-title-link">
            {props.title}
          </a>
        </h3>
      </header>

      {props.text && (
        <p className="ArticlePreview-text">
          {props.text}
        </p>
      )}
    </article>
  )
}

ArticlePreview.props = {
  datePublished: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.text
}

ArticlePreview.defaultProps = {
  title: 'Untitled'
}

export default ArticlePreview
