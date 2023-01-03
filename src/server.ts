import net, { Socket } from 'net'
import http, { IncomingMessage, ServerResponse } from 'http'

const server = http.createServer()

const handleConnection = (socket: Socket) => {
    socket.on('data', (chunk) => {
        console.log('Received chunk:\n', chunk.toString())
    })
    socket.write('HTTP/1.1 200 OK\r\nServer: my-web-server\r\nContent-Length: 0\r\n\r\n')
}

server.on('connection', handleConnection)
server.listen(3000)
