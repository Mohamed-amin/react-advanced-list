import React, { Component } from 'react';

class FormElement extends Component{
  render(){
    const { onChange, type } = this.props;
    
    return(
      <div className="form-element" >
        <input type="text" placeholder={type} onChange={e => onChange(e, type)}/>
      </div>
    )
  }
}

export default FormElement;
