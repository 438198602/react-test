/**
 * 首页
 */
import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import utils from '../../utils/utils';

import './home.styl';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(utils.getURLParameters('http://url.com/page?name=Adam&surname=Smith'));
    console.log(utils.detectDeviceType());
    console.log(utils.bottomVisible());
  }

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
