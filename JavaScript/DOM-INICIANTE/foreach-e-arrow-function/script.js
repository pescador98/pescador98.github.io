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
