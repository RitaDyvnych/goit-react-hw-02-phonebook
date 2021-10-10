import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./components/contacts.module.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleSubmit = ({ name, number }) => {
    if (!this.state.contacts.find((el) => el.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className={style.title}>Phonebook</h1>
        <Form handleSubmit={this.handleSubmit} name={this.state.name} />

        <h2 className={style.title}>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
