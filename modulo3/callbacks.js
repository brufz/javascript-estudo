//permite que trabalhe com programacao assincrona e mantenha
//um retorno e uma ligaçao do codigo principal com as threads que forem abertas
//pela programacao assncrona

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
//setTimeOut inicia outra linha de processamento e continua a processar
const cozinha = (pedido, callback) =>
  setTimeout(() => {
    console.log(pedido['nome'] + ' pronto')
    //quando chamava o garçom como callback a tarefa se tornava o pedido['nome']
    callback(pedido['nome'] + ' para cliente')
  }, pedido['tempo'])
//calback da cozinha é o garçom
const garcom = (tarefa, callback) => {
  console.log('Levando ' + tarefa)
  callback()
}

const fazerPedido1 = () => {
  garcom('pedido 1 para cozinha', () => {
    cozinha(pedido1, retornoPedido1())
  })
}

const retornoPedido1 = retorno1 =>
  garcom('pedido 2 para cozinha', fazerPedido2())

const fazerPedido2 = () => cozinha(pedido2, retornarPedido2())

const retornarPedido2 = retorno2 =>
  garcom('pedido 3 para cozinha', fazerPedido3())

const fazerPedido3 = () => cozinha(pedido3, retornarPedido3())

const retornarPedido3 = retorno3 => garcom(retorno3, encerrarPedidos())

const encerrarPedidos = () => {
  console.log('Encerrando pedidos')
  console.log('Entregando conta')
}
//callback hell
const janta = () => {
  console.log('iniciando pedidos')
  fazerPedido1()
}

janta()
