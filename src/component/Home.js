import React, { Component } from 'react'
import'../styles/Home.css' ;
import NavBar from './NavBar';

export default class Home extends Component {
  render() {

    return (
      <div>
      <NavBar/>
      <div className="wrapper">
        <div className="box red"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
      </div>
      </div>
    )
  }
}

