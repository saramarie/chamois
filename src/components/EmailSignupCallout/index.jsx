import React from 'react';
import PropTypes from 'prop-types';

import PageBlock from '../PageBlock';
import EmailSignup from '../EmailSignup';
import './styles.css';

const EmailSignupCallout = props => (
  <PageBlock background="gray">
    <EmailSignup center />
  </PageBlock>
);

export default EmailSignupCallout;