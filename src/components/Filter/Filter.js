import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import * as contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({value, onChange}) => (
    <label>
        Find contact by name <br />
        <input type="text"
            value={value}
            onChange={onChange}
        />
    </label>
);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);