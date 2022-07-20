let a = 5

if (a > 10) {
  console.log(`${a} es mayor a 10`)
} else {
  console.log(`${a} es menor a 10`)
}

console.log('Fin de programa')

// Días de la semana
const hoy = new Date()
let dia = hoy.getDay()

console.log({ dia })

if (dia === 0) {
  console.log('Domingo')
} else if (dia === 1) {
  console.log('Lunes')
} else {
  console.log('No es ni domingo, ni lunes')
}

const diasDeLaSemana = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
]
console.log(diasDeLaSemana[dia])

const diasSemana = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sábado',
}

console.log(diasSemana[dia])
