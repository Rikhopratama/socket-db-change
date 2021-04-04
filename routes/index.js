const { getStock, addStock, reduceStock, getCurrentStock } = require('../controllers/stock_data');
const { selfEmit: selfEmitSocket } = require('../self_emit_socket');

module.exports = async (app) => {
    app.get('/get_data', async (req, res) => {
        const data = await getStock();
        res.send(data);
    });

    app.get('/current_stock', async (req, res) => {
        const currentStock = await getCurrentStock();
        res.send(currentStock)
    });

    app.post('/add_stock', async (req, res) => {
        const newStockData = {
            product_code: req.body.product_code,
            qty: req.body.qty
        };

        const resultTrans = await addStock(newStockData);
        selfEmitSocket('stock_data')
        res.send(resultTrans);
    });

    app.post('/reduce_stock', async (req, res) => {
        const newStockData = {
            product_code: req.body.product_code,
            qty: req.body.qty
        };

        const resultTrans = await reduceStock(newStockData);
        selfEmitSocket('stock_data')
        res.send(resultTrans);
    });

};