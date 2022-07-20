const personajes = ['Ironman', 'Thor', 'Capitán América', 'Black Widow']

console.warn('For tradicional - básico')

for (let i = 0; i < personajes.length; i++) {
  console.log(personajes[i])
}

console.warn('For in')

for (let i in personajes) {
  console.log(personajes[i])
}

console.warn('For of')

for (let personaje of personajes) {
  console.log(personaje)
}
