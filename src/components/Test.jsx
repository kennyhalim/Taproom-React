import React, { Component } from "react";
import { Route, Redirect } from "react-router";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect === false) {
      return (
        <div>
          <button onClick={this.handleRedirect}>Redirect</button>
        </div>
      );
    } else {
      return <Redirect to="/keglist" />;
    }
  }
}
