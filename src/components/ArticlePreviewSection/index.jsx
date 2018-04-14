import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-merriweather';

import Grid from '../Grid';
import Card from '../Card';
import ArticlePreview from '../ArticlePreview';
import './styles.css';

const ArticlePreviewSection = ({ articlePreviews, columns }) => (
  <section className="ArticlePreviewSection">
    <h2 className="ArticlePreviewSection-title">Articles</h2>

    <div className="ArticlePreviewSection-articles">
      <Grid>
        {articlePreviews.map(preview => (
          <Grid item cols="4">
            <Card>
              <ArticlePreview
                datePublished={preview.datePublished}
                url={preview.url}
                title={preview.title}
                text={preview.text}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </section>
);

ArticlePreviewSection.propTypes = {
  articlePreviews: PropTypes.array,
  columns: PropTypes.number,
};

ArticlePreviewSection.defaultProps = {
  articlePreviews: [],
  columns: 3,
};

export default ArticlePreviewSection;
