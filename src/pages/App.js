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

const Home = React.lazy(() => import("./Home"));
const User = React.lazy(() => import("./User"));
const Detail = React.lazy(() => import("./Detail"));

const routes = [
  {
    path: "/",
    exact: true,
    isTabBar: true,
    component: Home
  },
  {
    path: "/user",
    exact: false,
    isTabBar: true,
    component: User
  },
  {
    path: "/detail",
    exact: false,
    component: Detail
  }
];

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <React.Fragment key={i}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <route.component {...props} />
                    </React.Suspense>

                    {route.isTabBar && (
                      <div className="root_tab_bar">
                        <NavLink exact to="/" className="link">
                          首页
                        </NavLink>
                        <NavLink exact to="/user" className="link">
                          我的
                        </NavLink>
                      </div>
                    )}
                  </React.Fragment>
                )}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
