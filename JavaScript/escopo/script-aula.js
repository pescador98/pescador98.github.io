var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// condição ? true : false

function podeBeber(idade) {
  //let pode = idade >= 18 ? "Pode chapar os globos" : "É criança ainda";
  return idade >= 18 ? "Pode chapar os globos" : "É criança ainda";
}
