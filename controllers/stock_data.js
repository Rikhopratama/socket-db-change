const { getData, save, getLastQtyByProductCode, getLastQty } = require('../services/stock_data');

module.exports = {

    getStock: async () => {
        try {
            return await getData();
        } catch (error) {
            throw new Error(error);
        }
    },

    getCurrentStock: async () => {
        try {
            return await getLastQty();
        } catch (error) {
            throw new Error(error);
        }
    },

    addStock: async (data) => {
        try {
            const { product_code, qty } = data;

            const getLastStockData = await getLastQtyByProductCode(product_code);
            const calculatingQty = (getLastStockData.current_qty || 0) + Number(qty);

            const saveData = {
                product_code,
                current_qty: calculatingQty
            }
            
            return await save(saveData);
        } catch (error) {
            throw new Error(error);
        }
    },

    reduceStock: async (data) => {
        try {
            const { product_code, qty } = data;

            const getLastStockData = await getLastQtyByProductCode(product_code);
            const calculatingQty = (getLastStockData.current_qty || 0) - Number(qty);

            const saveData = {
                product_code,
                current_qty: calculatingQty
            }
            
            return await save(saveData);
        } catch (error) {
            throw new Error(error);
        }
    }


}