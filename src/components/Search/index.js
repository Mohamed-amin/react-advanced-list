import React, { Component } from 'react';
import './styles.css';

class Search extends Component {

  render() {
    return (
      <div className="card">
        <form className="form">
          <div className="form-element">
            <input type="text" />
          </div>
          <div className="form-element">
            <input type="text" />
          </div>
          <div className="form-element">
            <input type="text" />
          </div>
          <div className="form-element">
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
