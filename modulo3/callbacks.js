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
    console.log(pedido['nome'] + 'pronto')
    callback(pedido['nome'])
  }, pedido['tempo'])
//calback da cozinha é o garçom
const garcom = tarefa => console.log('Levando ' + tarefa)

const janta = () => {
  console.log('iniciando pedidos')
  cozinha(pedido1, garcom)
  cozinha(pedido2, garcom)
  cozinha(pedido3, garcom)
  console.log('encerrando pedidos')
  console.log('pedir conta') //teria que colocar essa função no callback para ser executada em sequencia
}

janta()
