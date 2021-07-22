import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { contactsSelectors, changeFilter } from "../../redux/contacts";

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
value: contactsSelectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(changeFilter(e.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);