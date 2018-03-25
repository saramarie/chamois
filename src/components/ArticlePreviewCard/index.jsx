import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import ArticlePreview from '../ArticlePreview'

const ArticlePreviewCard = ({size, ...props}) => (
  <Card size={size}>
    <ArticlePreview {...props} />
  </Card>
)

ArticlePreviewCard.props = {
  datePublished: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.text
}

ArticlePreviewCard.defaultProps = {
  title: 'Untitled'
}

export default ArticlePreviewCard
