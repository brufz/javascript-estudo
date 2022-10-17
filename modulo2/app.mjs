import { Carro, Bike } from './modules/agregation.mjs'
import * as Utils from './modules/utils.mjs'



let bike = new Bike()
bike.andar()
document.getElementById(
  'main'
).innerHTML += `Velocidade da bicicleta: ${bike.velocidade} <br/>`

Utils.funcao1()

document.getElementById("carregar").addEventListener('click', function(){
  import ("./modules/car.mjs").then((module) => {
    let carro = new module.Carro();
    carro.andar()
    document.getElementById(
    'main'
  ).innerHTML = `Velocidade do carro: ${carro.velocidade} <br />`
  })  
})

