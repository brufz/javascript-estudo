const { AndroidSharp } = require('@mui/icons-material')

class Carro {
  velocidade = 0
  ligado = false
  nivelCombustivel = 100
  qtdPortas = 4
  potencia = 100
  ligar() {
    if (this.ligado) {
      console.log('Carro já está ligado')
    } else {
      this.ligado = true
    }
  }

  andar() {
    if (!this.ligado) {
      this.ligar()
    }
    this.velocidade = 40
  }
}

class CarroQuebrado extends Carro {
  andar() {
    console.log('Carro quebrado')
  }
}

class CarroDeCorrida extends Carro {
  andar() {
    if (!this.ligado) {
      this.ligar()
    }
    this.velocidade = 120
  }
}

class CarroComArCondicionado extends Carro {
  temperatura = 25
  ligarAr() {
    this.temperatura = 23
  }
  desligarAr() {
    this.temperatura = 30
  }
}

let carroRuim = new CarroQuebrado()
let carrof1 = new CarroDeCorrida()
let carroAr = new CarroComArCondicionado()

carroRuim.andar()
carrof1.andar()
carroAr.andar()

console.log(carroRuim.velocidade)
console.log(carrof1.velocidade)
console.log(carroAr.velocidade)
