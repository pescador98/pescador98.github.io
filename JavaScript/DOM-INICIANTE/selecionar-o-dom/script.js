//Aula
// Seleciona pela classe, retorna uma HTMLCollection
const animais = document.getElementById("animais");
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");
// Seleciona todas as UL's, retorna uma HTMLCollection
const lista = document.getElementsByTagName("ul");
// Retorna o primeiro elemento
console.log(contato[0]);
//Seletor unico geral, baseado em seletor css
const animaisQ = document.querySelector(".animais");
const contatoQ = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");
// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

//Atividades
// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll("img");

console.log(
  imgSite.forEach((e, i) => {
    console.log(i, e);
  })
);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgApenas = document.querySelectorAll("img[src*='img/imagem']");
console.log(
  imgApenas.forEach((e, i) => {
    console.log(i, e);
  })
);
// Selecione todos os links internos (onde o href começa com #)
const hrefCerca = document.querySelectorAll("a[href^='#']");

console.log(
  hrefCerca.forEach((e, i) => {
    console.log(i, e);
  })
);
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".animais-descricao h2");
const animaisSelecao = document.querySelector(".animais-descricao");
const h2Animal = animaisSelecao.querySelector("h2");
console.log("opção 2 para selecionar o primeiro H2 " + h2Animal.innerText);
console.log(firstH2);

// Selecione o último p do site
const allP = document.querySelectorAll("p");
const lastP = allP[--allP.length];
console.log(lastP);
