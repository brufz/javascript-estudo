import { Car } from './modules/car.js'
import { Bike } from './modules/bike.js'

let carro = new Car()
carro.andar()
document.getElementById(
  'main'
).innerHTML = `Velocidade do carro: ${carro.velocidade} <br />`

let bike = new Bike()
bike.andar()
document.getElementById(
  'main'
).innerHTML += `Velocidade da bicicleta: ${bike.velocidade} <br/>`
