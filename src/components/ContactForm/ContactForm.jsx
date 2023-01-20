import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './ContactForm.module.css';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit} autoComplete="off">
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder=" "
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder=" "
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default ContactForm;