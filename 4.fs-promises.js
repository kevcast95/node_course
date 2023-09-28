const fs = require('node:fs/promises')
console.log('leyendo el primer archivo...')
console.log('--------------')
fs.readFile('./archivo.txt', 'utf-8').then(text => console.log(text))
console.log('mientras se lee el primer archivo...')
console.log('leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8').then(text => console.log(text))
