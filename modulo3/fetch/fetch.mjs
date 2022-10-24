// //post - precisa de body (put e patch tambem)
// let response = fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'post',
//   body: JSON.stringify({
//     userID: 123456,
//     title: 'publicação de teste',
//     body: 'lorem ipsum'
//   }),
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
// response
//   .then(resposta => resposta.json())
//   .then(jsonObject => console.log(jsonObject))

// //get
// let response2 = fetch('https://jsonplaceholder.typicode.com/users')
// response2
//   .then(resposta => resposta.json())
//   .then(jsonObject => console.log(jsonObject))

// //

// //coloca a uri desejada após o link e o método desejado
let baseUrl = 'https://jsonplaceholder.typicode.com/'
const apiCall = (endpoint, method, data) => {
  let uri = baseUrl + endpoint
  return fetch(uri, {
    method: method,
    headers: {
      'Content-type': 'application/json;' //cada header tem que ser separado com ;
      //dependendo da api aqui seria colocado o token de Authorization
    },
    body: data ? data : null
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => error)
}

// // apiCall('posts', 'GET').then(console.log)
// apiCall('posts', 'GET').then(console.log)

const apiGet = async (resource, id) => {
  //se o id estiver definido pega o id, senão, só o resource:
  let endpoint = id ? `${resource}/${id}` : resource
  console.log(await apiCall(endpoint, 'GET'))
}

const apiPost = async (resource, data) => {
  let endpoint = resource
  console.log(await apiCall(endpoint, 'POST', data))
}

const apiPut = async (resource, id, data) => {
  let endpoint = `${resource}/${id}`
  console.log(await apiCall(endpoint, 'PUT', data))
}

const apiDelete = async (resource, id) => {
  let endpoint = `${resource}/${id}`
  console.log(await apiCall(endpoint, 'DELETE'))
}

apiGet('posts')
apiGet('posts', 67)
apiPost('posts', {
  userId: 123,
  title: 'teste',
  body: 'corpo teste'
})
apiPut('posts', 44, {
  userId: 123,
  title: 'teste',
  body: 'corpo teste'
})

apiDelete('posts', 44)
