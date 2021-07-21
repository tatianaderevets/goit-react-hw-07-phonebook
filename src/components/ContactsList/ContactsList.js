import React from "react";
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operation';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContacts }) => (
    
    <ul>{contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>{name}:{number}</p>
            <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
    ))}
            
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func.isRequired
}

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch =>( {
onDeleteContacts: (id) => dispatch(contactsOperation.deleteContact(id)),
})
 

export default connect(mapStateToProps, mapDispatchToProps )(ContactsList);