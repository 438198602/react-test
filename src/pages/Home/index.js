import React, { Component } from "react";
import logo from "../../image/logo.svg";
import "./index.scss";

import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="root_page App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <div style={{ width: "100%", height: "1000px" }} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  state => ({
    // lists: state.reducers.lists
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
