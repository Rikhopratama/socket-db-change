const { SOCKET_PORT } = process.env;
const { getCurrentStock } = require('./controllers/stock_data');

const io = require('socket.io').listen(SOCKET_PORT);

io.sockets.on('connection', function(socket) {
    console.log(`CLIENT CONNECT TO SOCKET`)

    socket.emit('socket_connection');

    socket.on('get_initial_stock_data', async () => {
        console.log('CLIENT EMIT get_initial_stock_data')
        socket.emit("stock_data", await getCurrentStock())
    })

    // socket.on('update_current_stock', async () => {
    //     console.log('SERVER SELF EMIT update_current_stock')
    //     socket.emit("stock_data", await getCurrentStock())
    // })

    socket.on('disconnect', () => console.log('CLIENT DISCONNECTED TO SOCKET'))
})

module.exports = io;