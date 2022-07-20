/**
 * Días de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

const dia = 1 //el domingo es el día 0 según el objeto de JS
const horaActual = 10

let horaApertura
let mensaje //Está abierto, Está cerrado, hoy abrimos a las XX

// Ejemplo con if normal
if ([0, 6].includes(dia)) {
  console.log('Fin de semana')
  horaApertura = 9
} else {
  console.log('Día de semana')
  horaApertura = 11
}

// Ejemplo con operador ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11

if (horaActual >= horaApertura) {
  mensaje = 'Está abierto'
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`
}

console.log({ horaApertura })
console.log({ mensaje })
