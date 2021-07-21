import { createAction } from '@reduxjs/toolkit';

export const featchContactRequest = createAction('contacts/featchContactRequest');
export const featchContactSuccess = createAction('contacts/featchContactSuccess');
export const featchContactError = createAction('todos/featchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('todos/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('todos/deleteContactError');




export const changeFilter = createAction('contacts/changeFilter');




// export default {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     addContact,
//     deleteContact,
//     changeFilter
// };