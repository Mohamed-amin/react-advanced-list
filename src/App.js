import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import CountriesList from './components/CountriesList';


class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Search Countries </h1>
        </header>
        <Search />
        <CountriesList />
      </div>
    );
  }
}

export default App;
