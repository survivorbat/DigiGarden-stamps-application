import React, { Component } from 'react'
import axios from "axios"

import Header from './components/Header'
import Application from './components/application/Application'

class App extends Component {
  constructor(){
    super()
    this.state = {
      values: {},
      stempels: []
    }
  }
  componentWillMount(){
    axios.get("/data.json")
      .then((result) => result.data)
      .then((result) => this.setState(result))
  }
  render() {
    return (
      <div className="container">
        <Header title={this.state.values.title} desc={this.state.values.desc}/>
        <Application data={this.state.stempels} successtext={this.state.values.successtext}/>
      </div>
    )
  }
}

export default App
