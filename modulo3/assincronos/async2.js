// async function add(firstNumber, secondNumber) {
//   if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
//     throw 'firstNumber e secondNumber devem ser números'
//   }
//   return firstNumber + secondNumber
// }

// add('x', 'y')
//   .then(value => {
//     console.log(value)
//   })
//   .catch(error => {
//     console.log(error)
//   })

//await pausa a execução da função aguardando a promise ser resolvida

// const url = 'https://jsonplaceholder.typicode.com/users'
// // const getPosts = () => fetch(url)

// // getPosts().then(response => {
// //   console.log(response)
// // })

// const getPosts = async () => {
//   try {
//     const response = await axios.get(url)
//     console.log(response.data)
//   } catch (error) {
//     console.log('erro: ', error)
//   }
// }

// getPosts()
//requests sequenciais
const getPokemonUrl = numeroPokemon => {
  ;`https://pokeapi.co/api/v2/pokemon/${numeropokemon}`
}
const get3Pokemon = async () => {
  const pokemon1 = await axios.get(getPokemonUrl(1))
  const pokemon2 = await axios.get(getPokemonUrl(2))
  const pokemon3 = await axios.get(getPokemonUrl(3))
  console.log(pokemon1.data)
  console.log(pokemon2.data)
  console.log(pokemon3.data)
}

get3Pokemon()

//requests em paralelo
const get3PokemonParalelo = async () => {
  const promisePokemon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const promisePokemon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
  const promisePokemon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

  const pokemons = await Promise.all([
    promisePokemon1,
    promisePokemon2,
    promisePokemon3
  ])

  console.log(pokemons)
}

get3PokemonParalelo()
