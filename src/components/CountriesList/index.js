import React, { Component } from 'react';
import './styles.css';

class CountriesList extends Component {
  state = { countries: [] }
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(res => res.json())
      .then(countries => {
        this.setState({ countries })
      });
  }
  render() {
    const { countries } = this.state;
    return (
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Sub-Region</th>
              <th>indepentant</th>
            </tr>
          </thead>
          <tbody>
          {countries.map( country =>
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.subregion}</td>
              <td>{country.subregion}</td>
              <td>{country.independent}</td>
            </tr>

          )}
          </tbody>
        </table>
       </div>
    );
  }
}

export default CountriesList;
