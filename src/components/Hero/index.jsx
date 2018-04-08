import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';
import 'typeface-merriweather';

import PageBlock from '../PageBlock';
import Button from '../Button';
import './styles.css';

const heroClasses = props =>
  cn('Hero', {
    'Hero--centered': props.center,
  });

const Hero = props => {
  return (
    <PageBlock background={props.background}>
      <div className={heroClasses(props)}>
        <h2 className="Hero-title">{props.title}</h2>

        <p className="Hero-text">{props.text}</p>

        <Button>{props.ctaText}</Button>
      </div>
    </PageBlock>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  ctaText: PropTypes.string,
  center: PropTypes.bool,
};

Hero.defaultProps = {
  center: false,
};

export default Hero;
