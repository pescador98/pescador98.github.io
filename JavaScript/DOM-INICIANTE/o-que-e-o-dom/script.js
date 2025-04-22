// exemplos aula
const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener("click", function () {
  console.log("clicou em ", h1Selecionado.innerText);
});

// Retorne o url da página atual utilizando o objeto window
const url = document.URL;
const url2 = window.location.href;
console.log("Url1", url);
console.log("Url2", url2);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);
// Retorne a linguagem do navegador
const lang = document.documentElement.lang;
const lang2 = window.navigator.language;
console.log("Lang1", lang);
console.log("Lang2", lang2);
// Retorne a largura da janela
const width = document.documentElement.clientWidth;
const width2 = innerWidth;
console.log("width1 ", width);
console.log("width2", width2);
