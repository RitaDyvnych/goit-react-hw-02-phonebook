import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((el) => (
          <li key={el.id}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
