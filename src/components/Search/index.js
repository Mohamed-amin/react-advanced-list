import React, { Component } from 'react';
import './styles.css';
import FormElement from './../FormElement';

class Search extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="card">
        <form className="form">
          <FormElement type="name.common" onChange={onChange}/>
          <FormElement type="capital" onChange={onChange}/>
          <FormElement type="region" onChange={onChange}/>
          <FormElement type="subregion" onChange={onChange}/>
        </form>
      </div>
    );
  }
}

export default Search;
