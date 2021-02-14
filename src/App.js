import './App.css';
import React, { Component } from 'react';
import Header from './components/header/Header';
import Seller from './components/seller/Seller'

class App extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Sellers Info",
      sellerDetails: null
    };
  }

  componentDidMount() {
    fetch('mockdata.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ sellerDetails: data });
      });
  }

  render() {
    return (<React.Fragment>
      <Header heading={this.state.heading} />
      {this.state.sellerDetails && <Seller details={this.state.sellerDetails} />}
    </React.Fragment>);
  }
}
export default App;
