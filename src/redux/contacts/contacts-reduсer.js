import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactError,
    deleteContactSuccess,
    changeFilter,
    featchContactRequest,
    featchContactSuccess,
    featchContactError
} from './contacts-actions';



const items = createReducer([],
    {[featchContactSuccess]: (_, {payload}) => payload,
        [addContactSuccess]: (state, action) => [...state, action.payload],
        [deleteContactSuccess]: (state, action) =>
            state.filter(contact => contact.id !== action.payload),
    }
);

const loading = createReducer(false, {

    [featchContactRequest]: () => true,
    [featchContactSuccess]: () => false,
    [featchContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,

})

const error = createReducer(null, {});


export default combineReducers({
    items,
    filter,
    loading,
    error
});