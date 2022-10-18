function maiorqueN(n) {
  return function (m) {
    return m > n
  }
}

const maiorQue10 = maiorqueN(10)
console.log(maiorQue10(9))

maiorqueN()
