import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import CountriesList from './components/CountriesList';


class App extends Component {
  state = {
    searchTerms: {}
  }
  /**
   * To simplify, this is what we want to do
   * before : state = {
   *     searchTerms : {
   *          country: 'Aruba'
   *     }
   *  }
   *
   * after: state = {
   *     searchTerms: {
   *        country: 'Aruba',
   *        capital: 'Oranjestad'
   *      }
   *  }
   *
   * So basically extending the current searchTerms with a new key
   * with maintaining the current state.
   */
  onChange = (e, type) =>{
    const { value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTerms: {
          ...prevState.searchTerms,
          [type]: value,
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
