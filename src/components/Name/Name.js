import React, { Component } from "react";
import Details from "../Details/Details";
class Name extends Component {
  state = {
    show: false
  };
  showExtraInfo = () => {
    this.setState({ show: true });
  };
  render() {
    const extraInfo = this.state.show ? (
      <Details details={this.props.info} />
    ) : null;
    return (
      <div>
        <h1 onClick={this.showExtraInfo}>{this.props.info.name}</h1>
        {extraInfo}
      </div>
    );
  }
}
export default Name;
