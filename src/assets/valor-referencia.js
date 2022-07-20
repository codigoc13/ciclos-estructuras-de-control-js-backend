// Parámetro pasado por valor
let a = 10
let b = a

console.log({ a, b })

// Parámetro pasado por referencia
let manuel = { edad: 20 }
let carolina = manuel
carolina.edad = 30

console.log({ manuel, carolina })

// Haciendo copia de un objeto
// Lo que haremos será una copia del objeto
// para así tratarlo como un objeto independiente
let carlos = { edad: 18 }
let maria = { ...carlos }
maria.edad = 15

console.log({ carlos, maria })
