const Sequelize = require('sequelize');
const db = require('../db');

const StockData = db.define('stock_data', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    product_code: {
        type: Sequelize.STRING,
    },
    current_qty: {
        type: Sequelize.BIGINT
    },
    created_by: {
        type: Sequelize.STRING
    },
    updated_by: {
        type: Sequelize.STRING
    }
},  {
    timestamps: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = StockData;