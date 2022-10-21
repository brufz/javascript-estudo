let pedido1 = {
  nome: 'pedido1',
  tempo: 3000
}
let pedido2 = {
  nome: 'pedido2',
  tempo: 1000
}

let pedido3 = {
  nome: 'pedido3',
  tempo: 2000
}

const cozinha = pedido =>
  new Promise((resolve, reject) => {
    console.log('executando promise')
    let tenhoIngredientes = true
    setTimeout(() => {
      if (tenhoIngredientes) {
        console.log(pedido['nome'] + 'pronto')
        resolve(pedido['nome'] + ' para cliente')
      }
      reject('sem ingredientes')
    }, pedido['tempo'])
  })

const janta = async () => {
  console.log('iniciando pedido')
  try {
    let retorno = await cozinha(pedido1)
    console.log(retorno)
    console.log('comer')
    await cozinha(pedido2)
    await cozinha(pedido3)
  } catch (retorno) {
    console.log(retorno)
    console.log('mudar pedido')
  }
  return "pedir conta"
}

const funcaoSincrona = () => {
  let resultado = janta()
  return resultado
}

const funcaoAssincrona = async() => {
  let resultado = await funcaoSincrona()
  return console.log("O resultado é " + resultado)
}

funcaoAssincrona().then((resultado) => console.log(resultado))

