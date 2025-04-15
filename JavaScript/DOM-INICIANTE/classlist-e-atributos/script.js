// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((e) => {
  e.classList.add("ativo");
  console.log(e.innerHTML, e.getAttribute("class"));
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((e, i) => {
  if (i > 0) {
    e.classList.remove("ativo");
  }
  console.log(e, i);
});

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu
