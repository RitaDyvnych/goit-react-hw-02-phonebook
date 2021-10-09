import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </div>
    );
  }
}

export default App;
