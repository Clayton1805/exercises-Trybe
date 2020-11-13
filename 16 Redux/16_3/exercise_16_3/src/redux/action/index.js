export const cadastrar = ({ nome, idade, email }) => ({
  type: 'CADASTRO',
  cadastro: { nome, idade, email },
});

export const infoCadastro = (name, value) => ({
  type: 'INFO_CADASTRO',
  name,
  value,
});
