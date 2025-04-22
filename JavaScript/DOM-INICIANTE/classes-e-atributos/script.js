// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((e) => e.classList.add("ativo"));
console.log(itensMenu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((e, i) => {
  if (i > 0) {
    e.classList.remove("ativo");
  }
  console.log(e, i);
});
// Verifique se as imagens possuem o atributo alt
const imagem = document.querySelectorAll("img");
imagem.forEach((e) => {
  console.log(e, e.hasAttribute("alt"));
});
//console.log(imagem);
// Modifique o href do link externo no menu
const hrefMenu = document.querySelector("a[href*='https']");
console.log(hrefMenu);
