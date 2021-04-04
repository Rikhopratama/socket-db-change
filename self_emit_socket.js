const socket = require('./socket');

const { getCurrentStock } = require('./controllers/stock_data');

exports.selfEmit = async(event) => {

    switch (event) {
        case 'stock_data':
            console.log('START EMIT STOCK DATA')
            socket.emit('stock_data', await getCurrentStock())
            break;
    
        default:
            break;
    }

}