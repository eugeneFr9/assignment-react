import React, { Component } from "react";
class Name extends Component {
  render() {
    return (
      <div>
        <h1 onClick={this.props.clicked}>{this.props.name}</h1>
      </div>
    );
  }
}
export default Name;
