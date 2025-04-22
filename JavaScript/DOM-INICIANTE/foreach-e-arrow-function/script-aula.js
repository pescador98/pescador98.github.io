const img = document.querySelectorAll("img");
console.log(img);
img.forEach((e, i) => console.log(i, e));

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((i) => console.log(i));
// Mostre o texto dos parágrafos no console
paragrafos.forEach((i) => console.log(i.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i);

const imagens = document.querySelectorAll("img");
console.log(imagens);

//e = nome dado ao elemento do forEach
//i = para indicar o indice do elemento
//a = passa a array inteira
// imagens.forEach(function (e, i, a) {
//   console.log(i);
// });

//Array vs Node
// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (e) {
//   console.log(e);
// });

//usando arrow function
//se a função possuir apenas uma linha pode ser usada sem as {}
imagens.forEach((e) => console.log(e));
