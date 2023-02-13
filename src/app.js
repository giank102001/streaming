const express = require('express');
const app = express();

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);
// para generar una comunicacion vamos a usar socket.io
const io = require('socket.io')(http);

//routes
app.use(require('./routes/littlezoom.routes'));

//donde vamos a cargar los html para trabajar 
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('stream', (imagen) => {
        // emitir a todos los sockets conectados 
        socket.broadcast.emit('stream', imagen);
    })
})

module.exports = http;