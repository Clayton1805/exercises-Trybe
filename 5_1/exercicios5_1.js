/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
console.log()
document.getElementsByTagName("p")[0].innerHTML = "rico";

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

document.querySelectorAll(".main-content .center-content")[0].style.backgroundColor = "rgb(255,255,255)";

document.getElementsByTagName("h1")[0].innerHTML = "Exercício 5.1 - JavaScript";

/* for (let indice = 0; indice < document.getElementsByTagName("p").length; indice += 1){
    document.getElementsByTagName("p")[indice].style.fontWeight = "bold";
} */

for (let indice = 0; indice < document.getElementsByTagName("p").length; indice += 1){
    document.getElementsByTagName("p")[indice].style.textTransform = "uppercase";
}

for (let indice = 0; indice < document.getElementsByTagName("p").length; indice += 1){
    console.log(document.getElementsByTagName("p")[indice].innerHTML);
}
