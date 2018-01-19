/**
 * 详情页面
 */
import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './detail.styl';


class Detail extends Component {
  render() {
    return (
      <div className="App-Detail">
        <header className="App-header">
          <h1 className="App-title">Detail</h1>
        </header>
        <Link to="Home">
          返回
        </Link>
        <p className="App-intro">
          Welcome to Detail
        </p>
      </div>
    );
  }
}

export default Detail;
