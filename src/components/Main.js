import React, { Component } from 'react';
import Sider from './Sider';
import Content from './Content';
import './Main.css';

export default class Main extends Component {
  render() {
    return <div className="Main">
      <Sider />
      <Content />
    </div>
  }
}