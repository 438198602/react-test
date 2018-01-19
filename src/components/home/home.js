/**
 * 首页
 */
import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './home.styl';


class Home extends Component {
  render() {
    return (
      <div className="App-Home">
        <header className="App-header">
          <h1 className="App-title">Home</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="Detail">
          跳转详情页
        </Link>
      </div>
    );
  }
}

export default Home;
