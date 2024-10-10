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
console.log(firstH2);
// Selecione o último p do site
const allP = document.querySelectorAll("p");
const lastP = allP[--allP.length];
console.log(lastP);
