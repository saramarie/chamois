import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-merriweather';

import SectionTitle from '../SectionTitle';
import Grid from '../Grid';
import Card from '../Card';
import ArticlePreview from '../ArticlePreview';
import './styles.css';

const ArticlePreviewSection = ({ articlePreviews, columns }) => (
  <section className="ArticlePreviewSection">
    <SectionTitle title="Articles" center marginBottom />

    <div className="ArticlePreviewSection-articles">
      <Grid>
        {articlePreviews.map(preview => (
          <Grid key={preview.id} item largeCols={12 / columns}>
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
