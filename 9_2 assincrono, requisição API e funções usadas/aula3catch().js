
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
// o then pega o resultado caso resolve for o resultado 
// ou no caso pondo outro then depois dele apos o then anterior ser concluído ele pega o retorno da função como parâmetro
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
// o catch pega o resultado caso de reject
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));