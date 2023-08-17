const http = require('http')

const fs = require('fs')
const { error } = require('console')
const host = "localhost"
const port = 3000


const server = http.createServer((req, res) => {
    res.writehead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html'), (error, data) => {
        if (error) {
            res.writeHead(404)
            res.write('archivo no encontrado')
        } else {
            res.write(data)
        }
        res.end()
    }
  
   
})

server.listen(port, host, () => {
    console.log("servidor", host, port)
})