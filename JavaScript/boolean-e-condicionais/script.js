// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 25;
var parenteIdade = 50;
if (minhaIdade === parenteIdade) {
  console.log("Temos a mesma idade");
} else if (minhaIdade > parenteIdade) {
  console.log("Sou mais velho que meu parente");
} else {
  console.log("Meu parente é mais velho");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //falso
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //verdadeiro
} else {
  console.log("Falso");
}
