//classlist
const menu = document.querySelector("menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");

//get e setAttribute
const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

const imgA = document.querySelector("img");
console.log(imgA.getAttribute("src"));
imgA.setAttribute("alt", "Raposa");
console.log(imgA.getAttribute("alt"));
console.log(imgA.hasAttribute("id"));
