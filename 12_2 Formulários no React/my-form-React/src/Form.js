import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Nome: '',

    }
    this.handleChange = this.handleChange.bind(this); 
  }
  handleChange({ target }, maxLength) {
    console.log('chamou');
    const name = target.name
    let value = (name === 'Nome') ? target.value.toUpperCase() : target.value;

    if (maxLength) {
      value = value.substring(0,maxLength);
    }



    this.setState({[name]: value});
  }
//   maxLength(numero) {
//     console.log('xablau');
//   }
  render() {
    return (
      <form>
        <fieldset value="">
          <input name="Nome" type="text" onChange={(event) => this.handleChange(event, 4)} value={this.state.Nome} />
        </fieldset>
      </form>

    );
  }
}

export default Form;
