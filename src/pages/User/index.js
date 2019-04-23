import React, { Component } from "react";
import "./index.scss";

import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions";
import { data } from "../../data/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.lists);
    this.props.actions.getDataLists(data);
    setTimeout(() => {
      window.scrollTo(0, 100);
      console.log("top");
    }, 100);
  }

  componentWillUnmount() {
    console.log("3456789");
  }

  render() {
    const { lists } = this.props;
    console.log(this.props);

    return (
      <div className="root_page user">
        <div>
          {lists.map((item, index) => {
            return (
              <div key={index} className="item">
                {/* <Link to="detail">
                <p>
                  {index + 1}: {item.node.content}
                </p>
              </Link> */}
                <div
                  onClick={() => {
                    this.props.history.push("/detail");
                  }}
                >
                  <p>
                    {index + 1}: {item.node.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    lists: state.reducers.lists
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
