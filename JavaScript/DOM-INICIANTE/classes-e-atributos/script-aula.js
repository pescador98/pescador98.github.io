const menu = document.querySelector(".menu");
console.log(menu.classList);
//adciona uma clase
menu.classList.add("ativo", "teste");
//remove uma clase
menu.classList.remove("azul");
//como se fosse um interruptor se a clase existir ele exclui se não ele adiciona
menu.classList.toggle("azul");
//menu.classList.toggle("azul");
//verifica se contem a classe
if (menu.classList.contains("azul")) {
  menu.classList.add("tem-azul");
} else {
  menu.classList.add("sem-azul");
}
//uso de attributes (não usar querySelectorAll)
const animais = document.querySelector(".animais");
console.log(animais.attributes);

const imagem = document.querySelector("img");
//getAttribute() pega o valor especifico de um atributo como src,id,alt e etc
console.log(imagem.getAttribute("class"));
//setAttribute() adiciona ou atualiza um atriburo
imagem.setAttribute("alt", "Raposa");
console.log(imagem.getAttribute("alt"));
//removeAttribute() remove o atributo
imagem.removeAttribute("alt");
//hasAttribute() verifica se possui um atributo e retorna true ou false
console.log(imagem.hasAttribute(".menu[href]"));
