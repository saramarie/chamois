import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import TextField from '../TextField';
import Button from '../Button';
import './styles.css';

class EmailSignup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  emailSignupClasses = props =>
    cn('EmailSignup', {
      'EmailSignup--centered': props.center,
    });

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.email) {
      console.log(`Signing up email ${this.state.email}`);
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  render() {
    return (
      <form
        className={this.emailSignupClasses(this.props)}
        onSubmit={this.onSubmit}
      >
        <div className="EmailSignup-field">
          <TextField
            label="Your Email"
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    );
  }
}

EmailSignup.propTypes = {
  center: PropTypes.bool,
};

EmailSignup.defaultProps = {
  center: false,
};

export default EmailSignup;
