const Sequelize = require('sequelize');

const sequelize = new Sequelize('stock_data', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('CONNECTION IS ESTABLISHED');
}).catch((err) => {
    console.log('ERROR CONNECTION');
});

module.exports = sequelize;