const INITIAL_STATE = {
  cadastrados: [],
  aleatorioText: {
    nome: '',
    idade: '',
    email: '',
  },
};

function listReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case 'CADASTRO':
      return {...state, cadastrados: [...state.cadastrados, {...action.cadastro}]};
    case 'INFO_CADASTRO':
      return {...state, aleatorioText: {...state.aleatorioText, [action.name]: action.value}};
    default:
      return state;
  }
}

export default listReducer;
