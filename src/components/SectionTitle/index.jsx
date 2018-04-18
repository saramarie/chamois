import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-merriweather';

import './styles.css';

const sectionTitleClasses = props =>
  cn('SectionTitle', {
    'SectionTitle--marginBottom': props.marginBottom,
    'SectionTitle--center': props.center,
  });

const SectionTitle = props => (
  <h2 className={sectionTitleClasses(props)}>{props.title}</h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.bool,
  marginBottom: PropTypes.bool,
};

SectionTitle.defaultProps = {
  center: false,
  marginBottom: false,
};

export default SectionTitle;
