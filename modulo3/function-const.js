const adicionar = function (a,b){ //constante para função evita sobrescrita de função
  return a + b; 
}

function calcular(a,b,operacao){
  return operacao(a,b);
}



let resultado = calcular(1,1, adicionar)
console.log(resultado)