import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends Component {
  render() {
    return (
      <div>
        <h1>Registered Customers</h1>
        <Link to="/cadastro">Fazer cadastro</Link>
      </div>
    );
  }
}

export default RegisteredCustomers;