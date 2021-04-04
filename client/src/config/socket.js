import socketIOClient from 'socket.io-client';

let socket = socketIOClient('http://localhost:5002');

socket.on('socket_connection', () => console.log('CONNECTION TO SOCKET SERVER IS GOOD...'))
socket.on('disconnect', () => console.log('CONNECTION TO SOCKET IS DISCONNECTED...'))

export { socket };