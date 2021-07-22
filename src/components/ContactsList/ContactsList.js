import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import contactsOperation from '../../redux/contacts/contacts-operation';
// import contactsSelectors from "../../redux/contacts/contacts-selectors";

import { contactsOperation, contactsSelectors } from "../../redux/contacts";

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



const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch =>( {
onDeleteContacts: (id) => dispatch(contactsOperation.deleteContact(id)),
})
 

export default connect(mapStateToProps, mapDispatchToProps )(ContactsList);