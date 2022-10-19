
let pedido1 = {
  nome: 'pedido 1',
  tempo: 3000
}

let pedido2 = {
  nome: 'pedido 2',
  tempo: 1000
}

let pedido3 = {
  nome: 'pedido 3',
  tempo: 2000
}

function cozinha(pedido) {
  setTimeout(() => { //setTimeOut inicia outra linha de processamento e continua a processar 
    console.log(pedido['nome'] + 'pronto')
  }, pedido['tempo'])
}

console.log("pedidos iniciados")
cozinha(pedido1)
cozinha(pedido2)
cozinha(pedido3)
console.log("pedidos encerrados")
