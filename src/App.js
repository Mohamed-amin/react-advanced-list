import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import CountriesList from './components/CountriesList';


class App extends Component {
  state = {
    searchTerms: {}
  }
  onChange = (e, type) =>{
    const { value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTerms: {
          ...prevState.searchTerms,
          type: value,
        }
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Search Countries </h1>
        </header>
        <Search onChange={this.onChange} />
        <CountriesList searchTerms={this.state.searchTerms} />
      </div>
    );
  }
}

export default App;
