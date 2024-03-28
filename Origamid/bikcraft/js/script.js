//Ativar underline nav
const linksNav = document.querySelectorAll(".header-menu a");
function ativarLink(_url) {
  if (location.href.includes(_url)) {
    _url.classList.add("ativo");
  }
}
linksNav.forEach(ativarLink);

//radio orcamento
const parametros = new URLSearchParams(location.search);

function ativarParam(p) {
  const elemento = document.getElementById(p);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}
parametros.forEach(ativarParam);

//Perguntas frequentes, aqbrir e fechar perguntas
const perguntas = document.querySelectorAll(".seguro-perguntas button");
//console.log(perguntas, resposta);
function abrirResposta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(pergunta);
}
function clickPergunta(pergunta) {
  pergunta.addEventListener("click", abrirResposta);
}
perguntas.forEach(clickPergunta);

//galeria bicicletas
const galeria = document.querySelectorAll(".bicicletas-vendas-img img");
const galeriaContainer = document.querySelector(".bicicletas-vendas-img");

function mudarFoto(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 934px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
  console.log(media);
}

function clickGaleria(img) {
  img.addEventListener("click", mudarFoto);
}
galeria.forEach(clickGaleria);

//animation
new SimpleAnime();
