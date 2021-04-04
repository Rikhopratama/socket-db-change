import React, { useState, useEffect } from "react";
import { socket } from '../config/socket';

import { Table } from 'react-bootstrap';

const FrontPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('EMIT INITIAL STOCK DATA')
    socket.emit('get_initial_stock_data');
  }, []);

  useEffect(() => {
    socket.on('stock_data', (result) => {
      console.log('on stock_data')
      setData(result);
    })
  }, []);

  const productTable = () => {
    const productData = data;
    let i = 1;

    if(productData){
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Code</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
  
            {productData.map((dt, i) => {
              return (
                <tr key={i}>
                  <td>{i++}</td>
                  <td>{dt.product_code}</td>
                  <td>{dt.current_qty}</td>
                </tr>
              )
            })}
  
          </tbody>
        </Table>
      )
    }
  };

  return (
    <>
     {productTable()}
    </>
  );
};

export default FrontPage;
