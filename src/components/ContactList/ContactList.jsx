import propTypes from 'prop-types';
import css from './ContactList.module.css';
// import Notification from './Notification';

export const ContactList = ({ contacts, deleteContact }) => (
  <div>
    <ul className={css.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={css.contactList}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);


ContactList.propTypes = {
  contact: propTypes.shape(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};


export default ContactList;