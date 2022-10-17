let objeto1 = {
  funcao1: function () {
    console.log('funcao 01')
  }
}

let objeto2 = {
  funcao1: function () {
    console.log('nova funcao')
  }
}

objeto1.funcao1()
objeto2.funcao1()

{
  let funcao2 = function () {
    console.log('funcao2')
  }
  funcao2()
}

{
  let funcao2 = function () {
    console.log('nova funcao2')
  }

  funcao2()
}
