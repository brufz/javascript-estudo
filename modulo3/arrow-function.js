//funcao sem arrow
function adicionar(a, b) {
  return a + b
}
//funcao com arrow
//multiplos parametros
const adicionarArrow = (a, b) => a + b
console.log(adicionarArrow(1, 1))

//parametro unico -> pode omitir o parenteses
const adicionarArrow2 = a => a + 2
console.log(adicionarArrow2(2))

// sem parametros
const arrow3 = () => 2
console.log(arrow3())

//declarações e expressoes -> entre chaves
const retornaA = () => {
  return 'a'
}

const retornaA2 = () => 'a'

console.log(retornaA())
console.log(retornaA2())

const retorna1mais1 = () => 1 + 1
//mais de uma declaração entre chaves
const retorna1mais2 = () => {
  let a = 1
  let b = 1
  return a + b
}
console.log(retorna1mais1())
console.log(retorna1mais2())

//ambos são uma expressao
const umMaisUm = () => retorna1mais1()
