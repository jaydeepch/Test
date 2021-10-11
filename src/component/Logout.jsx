import { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    localStorage.clear("login");
    window.location = "/Login";
  }

  render() {
    return null;
  }
}

export default Logout;
