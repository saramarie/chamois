import React, { Component } from 'react';

import TextField from '../TextField';
import SelectField from '../SelectField';
import BoxField from '../BoxField';
import Button from '../Button';

import './styles.css';

class ContactForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log('FORM SENT');
  };

  render() {
    const options = [
      {
        id: 1,
        value: 'web_design',
        label: 'Web Design',
      },
      {
        id: 2,
        value: 'print_design',
        label: 'Print Design',
      },
      {
        id: 3,
        value: 'seo_campaign',
        label: 'SEO Campaign',
      },
    ];

    return (
      <form className="ContactForm" onSubmit={this.onSubmit}>
        <fieldset className="ContactForm-field">
          <TextField label="Your Name" type="name" id="name" name="name" />
        </fieldset>
        <fieldset className="ContactForm-field">
          <SelectField id="inquiry" label="Inquiring About" options={options} />
        </fieldset>
        <fieldset className="ContactForm-field">
          <BoxField id="message" name="message" label="Leave a Message" />
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default ContactForm;
