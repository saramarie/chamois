import React, { Component } from 'react';

import mockData from './mockData';
import TextField from '../TextField';
import SelectField from '../SelectField';
import BoxField from '../BoxField';
import Button from '../Button';
import './styles.css';

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      inquiry: '',
      message: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    return (
      <form className="ContactForm" onSubmit={this.onSubmit}>
        <fieldset className="ContactForm-field">
          <TextField
            label="Your Name"
            type="name"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
        </fieldset>
        <fieldset className="ContactForm-field">
          <SelectField
            id="inquiry"
            label="Inquiring About"
            name="inquiry"
            options={mockData.options}
            value={this.state.inquiry}
            onChange={this.onChange}
          />
        </fieldset>
        <fieldset className="ContactForm-field">
          <BoxField
            id="message"
            name="message"
            label="Leave a Message"
            value={this.state.message}
            onChange={this.onChange}
          />
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default ContactForm;
