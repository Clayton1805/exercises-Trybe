const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL)
   .then((resposta) => console.log(resposta))
};

window.onload = () => fetchJoke();