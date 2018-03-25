import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-merriweather'

import ArticlePreviewCard from '../ArticlePreviewCard'
import './styles.css'

const ArticlePreviewSection = ({ articlePreviews, columns }) => (
  <section className="ArticlePreviewSection">
    <h2 className="ArticlePreviewSection-title">
      Articles
    </h2>

    <div className="ArticlePreviewSection-articles">
      {articlePreviews.map(preview => (
        <ArticlePreviewCard
          datePublished={preview.datePublished}
          url={preview.url}
          title={preview.title}
          text={preview.text}
          size={columns === 2 ? 'oneHalf' : 'oneThird'}
        />
      ))}
    </div>
  </section>
)

ArticlePreviewSection.propTypes = {
  articlePreviews: PropTypes.array,
  columns: PropTypes.number
}

ArticlePreviewSection.defaultProps = {
  articlePreviews: [],
  columns: 3
}

export default ArticlePreviewSection
