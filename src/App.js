import React, { Component } from "react";
import "./App.css";
import Names from "./components/Names";
import Control from "./components/Control";
import axios from "axios";

class App extends Component {
  state = {
    names: [],
    error: false,
    errorMessage: null
  };

  fetchUsers = () => {
    axios
      .get("http://uinames.com/api/?amount=5&ext")
      .then(response => {
        const names = response.data;
        this.setState({ names });
      })
      .catch(error => {
        this.setState({ error: true, errorMessage: error.message });
      });
  };
  render() {
    const error = this.state.error ? <h2>{this.state.errorMessage}</h2> : null;
    return (
      <div className="mainBox">
        <Control clicked={this.fetchUsers} />
        <Names names={this.state.names} />
        {error}
      </div>
    );
  }
}

export default App;
