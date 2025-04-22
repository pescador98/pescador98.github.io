//para selecionar Height e width de um elemento do DOM
const listaAnimais = document.querySelector(".animais-lista");
console.log("scrollHeight " + listaAnimais.scrollHeight);
console.log("clientHeight " + listaAnimais.clientHeight);
//para saber a distancia do topo do elemento até o topo do site
console.log("offsetTop " + listaAnimais.offsetTop);
//saber a distancia da lateral do enelento entre left ou rigth
//usando o primeiro H2 como teste
const firstH2 = document.querySelector("h2");
console.log("offsetLeft " + firstH2.offsetLeft);
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
console.log(firstH2.getBoundingClientRect());
//pega as propriedades da tela do usuario
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

const small = window.matchMedia("(max-width:600px)");
console.log(small);
