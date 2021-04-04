require('dotenv').config();
const { SERVER_PORT, SOCKET_PORT } = process.env;
const express = require('express');
let server = express();

const cors = require('cors');
const routes = require('./routes');

server.use(cors());
server.use(express.json({ extended: false }));

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
process.once('SIGUSR2', function () {
    server.close(function () {
      process.kill(process.pid, 'SIGUSR2')
    })
  })

/**
 * ROUTE CONFIGURATION
 */
routes(server);

/**
 * SOCKET CONFIGURATION
 */
require('./socket')


server.listen(SERVER_PORT, () => {
    console.log(`SERVER RUN ON PORT ${SERVER_PORT}`)
});