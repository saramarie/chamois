import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-merriweather';

import './styles.css';

const ArticlePreview = props => (
  <article className="ArticlePreview">
    <header className="ArticlePreview-header">
      {props.datePublished && (
        <p className="ArticlePreview-date">{props.datePublished}</p>
      )}

      <h3 className="ArticlePreview-title">
        <a href={props.url} className="ArticlePreview-title-link">
          {props.title}
        </a>
      </h3>
    </header>

    {props.text && <p className="ArticlePreview-text">{props.text}</p>}
  </article>
);

ArticlePreview.props = {
  datePublished: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.text,
};

ArticlePreview.defaultProps = {
  title: 'Untitled',
};

export default ArticlePreview;
