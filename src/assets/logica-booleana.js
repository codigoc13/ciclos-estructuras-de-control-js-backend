// Negación
console.warn('Not o la negación')
console.log(true)
console.log(!true)

const regresaTrue = () => {
  console.log('Regresa true')
  return true
}

const regresaFalse = () => {
  console.log('Regresa false')
  return false
}

console.log(!regresaTrue())
console.log(!regresaFalse())

// And (y)
console.warn('And (y)')

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Con el operador &&, si la primera es falsa no evaluará la segunda
console.log(regresaFalse() && regresaTrue())
console.log(regresaTrue() && regresaFalse())

// Or (o)
console.warn('Or (o)')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Con el operador ||, si la primera es falsa sí evaluará la segunda
console.log(regresaFalse() && regresaTrue())
console.log(regresaTrue() && regresaFalse())
