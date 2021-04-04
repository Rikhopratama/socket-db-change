const sequelize = require("../config/db");
const { StockDataModel } = require("../config/model/index");

module.exports = {
  getData: async (where = {}) => {
    const query = {};
    query.where = {};

    if (Object.keys(where).length) {
      Object.keys(where).forEach(dt => {
        query.where[dt] = where[dt];
      });
    }

    const data = await StockDataModel.findAll(query);
    return data;
  },

  getLastQtyByProductCode: async product_code => {
    const query = {};
    query.where = { product_code };

    query.limit = 1;
    query.order = [["id", "DESC"]];

    const lastData = await StockDataModel.findOne(query);
    return lastData ? lastData.get({ plain: true }) : {};
  },

  getLastQty: async () => {
    const query = `
      SELECT * FROM stock_data 
      WHERE id IN ( SELECT MAX(id) FROM stock_data GROUP BY product_code)
      ORDER BY product_code ASC
    `;

    const lastQty = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT
    });

    return lastQty;
  },

  save: async data => {
    const save = await StockDataModel.create(data);
    return save;
  }
};
