// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Isac",
  sobrenome: "Oliveira",
  idade: 25,
  ensinoMedio: true,
  tipoSangue: "A+",
};
console.log(pessoa.nome);
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  sexo: "macho",
  cor: "preto",
  idade: 10,
  late: "Quando vê um homem",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Silencio";
    }
  },
};
console.log(cachorro);
