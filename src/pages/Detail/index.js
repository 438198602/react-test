import React, { Component } from "react";
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
      <div className="App">
        <h3>detail</h3>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
        <div>
          <Link to="/User">Back to User</Link>
        </div>
        <div
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back to User
        </div>
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
