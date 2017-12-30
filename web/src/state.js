import { Component } from "react";

export default class extends Component {
  state = { ...this.props.initialState };
  render() {
    return this.props.render(this.state, x => this.setState(x));
  }
}
