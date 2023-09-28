const path = require('node:path')
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log('filePath:', filePath)

const base = path.basename('/temp/kev-secret/pass.txt')
console.log('base:', base)
const fileName = path.basename('/temp/kev-secret/pass.txt', '.txt')
console.log('fileName:', fileName)
