// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);
// Crie duas expressões que retornem NaN
var NaN1 = "num 10" / 10,
  NaN2 = "num 25" * 5;
console.log(NaN1, NaN2);
// Somar a string '200' com o número 50 e retornar 250
var num = "200";
var soma = +num + 50;
console.log(soma);
// Incremente o número 5 e retorne o seu valor incrementado
var i = 5;
var x = i++;
console.log(i, x);
// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = +peso / 2; // NaN (Not a Number)
console.log(peso);
