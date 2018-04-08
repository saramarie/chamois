import React, { Component, Fragment } from 'react';

import data from './data';
import SiteHeader from '../components/SiteHeader';
import Hero from '../components/Hero';
import ValuePropSection from '../components/ValuePropSection';
import EmailSignupCallout from '../components/EmailSignupCallout';
import Footer from '../components/Footer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SiteHeader siteTitle="chamois" menuLinks={data.menuLinks} />
        <Hero {...data.heroContent} background="gray" center />
        <ValuePropSection valueProps={data.valueProps} />
        <EmailSignupCallout />
        <Footer center />
      </Fragment>
    );
  }
}

export default App;
