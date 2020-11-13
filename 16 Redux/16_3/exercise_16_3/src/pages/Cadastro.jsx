import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { infoCadastro, cadastrar } from '../redux/action';

class Cadastro extends Component {
  confirmAllCampsFilled(aleatorioText, saveCadastro) {
    const { nome, idade, email } = aleatorioText;
    if (nome !== '' && idade !== '' && email !== '') {
      saveCadastro(aleatorioText);
    } else {
      alert('Preencha todo formulario');
    }

  }
  render() {
    const { saveCadastro, saveCadastro2, aleatorioText, cadastrados } = this.props;
    const { nome, idade, email } = aleatorioText;
    console.log(cadastrados)
    return (
      <div>
        <h1>Cadastro</h1>
        <input type="text" placeholder="nome" onChange={(event) => saveCadastro2(event)} value={nome}></input>
        <input type="text" placeholder="idade" onChange={(event) => saveCadastro2(event)} value={idade}></input>
        <input type="text" placeholder="email" onChange={(event) => saveCadastro2(event)} value={email}></input>
        <button type="button" onClick={() => this.confirmAllCampsFilled(aleatorioText, saveCadastro)}>Cadastrar</button>
        <Link to="/registered-customers">Clientes cadastrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveCadastro: (objCadastro) => dispatch(cadastrar(objCadastro)),
  saveCadastro2: ({ target }) => dispatch(infoCadastro(target.placeholder, target.value)),
});

const mapStateToProps = state => ({
  aleatorioText: state.listReducer.aleatorioText,
  cadastrados: state.listReducer.cadastrados,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
// export default Cadastro;
