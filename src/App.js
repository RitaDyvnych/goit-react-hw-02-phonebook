import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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
        <h1>Phonebook</h1>
        <Form />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <button type="button">Add contact</button>
      </div>
    );
  }
}

export default App;
