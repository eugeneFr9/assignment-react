import React, { Component } from "react";
import "./App.css";
import Name from "./components/Name/Name";
import Control from "./components/Control";
import axios from "axios";
import Details from "./components/Details/Details";
class App extends Component {
  state = {
    names: [],
    error: false,
    errorMessage: null,
    currentUser: null
  };
  showExtraInfo = id => {
    const newNames = [...this.state.names];
    const neededUser = newNames[id];
    this.setState({ currentUser: neededUser });
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
        {this.state.names
          ? this.state.names.map((el, index) => (
              <Name
                key={index}
                name={el.name}
                clicked={() => this.showExtraInfo(index)}
              />
            ))
          : null}
        {this.state.currentUser ? (
          <Details user={this.state.currentUser} />
        ) : null}
        {error}
      </div>
    );
  }
}

export default App;
