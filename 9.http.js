const { findFreePort } = require('./10.free-port.js')
const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})
findFreePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
})
