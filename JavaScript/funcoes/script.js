// Crie uma função para verificar se um valor é Truthy
function validarTruthy(dados) {
  if (dados) {
    console.log("Esse dado é Truthy");
  } else {
    console.log("Esse dado não é Truthy");
  }
}
validarTruthy("NaN");
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcPerimetro(lado) {
  return console.log(lado * 4);
}
calcPerimetro(13);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nomeCompletoo = `Seu nome completo é ${nome} ${sobrenome}`;
  console.log(nomeCompletoo);
}
nomeCompleto("Isac", "Oliveira");
// Crie uma função que verifica se um número é par
function validaPar(num) {
  if (num % 2 !== 1) {
    console.log("Numero é par");
  } else {
    console.log("Numero é impar");
  }
}
validaPar(33);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDados(dado) {
  return console.log(typeof dado);
}
tipoDados();
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Isac Oliveira ");
});
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
