import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";

import Home from "./Home";
import User from "./User";
import Detail from "./Detail";

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="tab_bar">
              <div className="item">
                <NavLink exact to="/" className="link">
                  <span>首页</span>
                </NavLink>
              </div>
              <div className="item">
                <NavLink exact to="/user" className="link">
                  <span>我的</span>
                </NavLink>
              </div>
            </div>

            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/user" component={User} />
                <Route path="/detail" component={Detail} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
