// import './App.css';
import { Component } from "react";
import { connect } from "react-redux";
import Form from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import contactsOperation from './redux/contacts/contacts-operation';


class App extends Component {

  state = {
    
  };

  componentDidMount() {
    this.props.fetchContacts();
}

render() {
    

    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
      
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingcontacts && <h2>Loading...</h2>}
        
        <ContactsList />
        
      </div>

    );
  }
}

const mapStateToProps = state => ({
  isLoadingcontacts: state.contacts.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () =>  dispatch(contactsOperation.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
