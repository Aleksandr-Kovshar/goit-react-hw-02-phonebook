import React, { Component } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
// import Phonebook from "./components/Phonebook";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Feedback />
        {/* <Phonebook /> */}
      </div>
    );
  }
}

export default App;
