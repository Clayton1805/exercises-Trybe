import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // this.parGreen = this.parGreen.bind(this);
    this.state = {
      numeroDeCliques: 0
    }
    // console.log('constructor');
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    // console.log('handleClick');
    // this.parGreen();
  };
  parGreen = () => {
    console.log(this);
    const numberClick = this.state.numeroDeCliques;
    if (numberClick % 2 === 0) {
      return 'green';
    }
    return '';
  };

  render() {
    // console.log('render');
    return <button onClick={this.handleClick} className={this.parGreen()}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
