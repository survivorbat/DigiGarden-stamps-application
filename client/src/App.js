import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/header/Header';
import Application from './components/application/Application';
import Footer from './components/footer/Footer';

const API_LINK = "/api";

class App extends Component {
  constructor(){
    super();
    this.state = {
      values: {
        title: "",
        desc: "",
        resettext: "",
        successtext: ""
      },
      stempels: []
    }
  }
  componentWillMount(){
    fetch(API_LINK+'/data.json')
    .then(res => res.json())
    .then(res => this.setState(res));
  }
  render() {
    return (
      <div className="container">
        <Header title={this.state.values.title} desc={this.state.values.desc}/>
        <Switch>
          <Route path='/' component={() => <Application API_LINK={API_LINK} data={this.state.stempels} successtext={this.state.values.successtext} resettext={this.state.values.resettext}/>}/>
        </Switch>
        <Footer copyright="© Heijden Solutions 2018"/>
      </div>
    );
  }
}

export default App;
