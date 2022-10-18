function app() {
  const arr = ['banana', 'maça', 'pera', 'laranja']
  console.log('inicio')
  mostraElementos(arr)

  console.log('--------------')

  arr.sort()
  console.log('Depois do sort')
  mostraElementos(arr)
}

function mostraElementos(arr) {
  const newArray = [...arr]
  console.log(newArray.length)
  while (newArray.length > 0) {
    console.log(newArray.shift())
  }
}

app()
