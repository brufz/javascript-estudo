function soma(a, b) {
  return a + b
}
const adicionar = soma
console.log(adicionar(1, 1))

//funcao anonima
const adicionar1 = function (a, b) {
  return a + b
}

const clicar = function () {
  console.log('clicado')
}

const acao = function (a, b, callback) {
  console.log('fazendo algo') //primeiro
  console.log(callback(a, b))
}

acao(1, 1, adicionar) //depois
