import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

import Home from './home/home';
import My from './my/my';
import Detail from './detail/detail';

import './App.styl';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">React</h1>
          </header>
          <div className="app-tab">
            <div className="tab-item">
              <NavLink to="/home" className="nav-link">
                <p className="home-img"></p>
                <span>首页</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/my" className="nav-link">
                <p className="my-img"></p>
                <span>我的</span>
              </NavLink>
            </div>
          </div>

          <div className="app-view">
            {/*
              Switch组件用来选择最近的一个路由，否则最后一个没有指定path的路由也会显示
              Redirect重定向到首页
            */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/my" component={My} />
              <Route path="/detail" component={Detail} />
              <Redirect from="/" to="/home" />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
