import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import GBForm from './GBForm/GBForm';
import GBList from './GBList/GBList';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header/>
      <GBForm/>
      <GBList/>
      </div>
    );
  }
}

export default App;
