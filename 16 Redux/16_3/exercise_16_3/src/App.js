import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
          <Switch>
            <Route path="/registered-customers" component={ RegisteredCustomers } />
            <Route path="/cadastro" component={ Cadastro } />
            <Route path="/login" component={ Login } />
            <Route path="/" component={ Home } />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
