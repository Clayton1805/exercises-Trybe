import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="senha"></input>
        <button type="button">Entrar na conta</button>
      </div>
    );
  }
}

export default Login;
