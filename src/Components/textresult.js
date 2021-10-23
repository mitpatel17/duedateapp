import React, { Component } from "react";

class TransformText extends Component {
  state = {
    text: this.props.text
  };

  render() {
    return this.state.text;
  }
}

export default TransformText;