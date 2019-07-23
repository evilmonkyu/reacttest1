import React, { Component } from "react";

export default class ComponentTest extends Component {
  render() {
    return <div>{this.props.val}</div>;
  }
}
