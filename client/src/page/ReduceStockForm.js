import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

const ReduceStockForm = (props) => {
  const [productCode, setProductCode] = useState();
  const [qty, setQty] = useState();
  const [disableButton, setDisableButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/reduce_stock';
    const data = {
      product_code: productCode,
      qty
    }
    
    setDisableButton(true);
    
    try {
      await axios.post(url, data);
      props.history.push('/');
    } catch (error) {
      console.log('error ==>', error)
      setDisableButton(false);
    }

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Product Code</Form.Label>
          <Form.Control 
            type="product_code" 
            placeholder="Enter product code"
            onChange={ (e) => setProductCode(e.target.value) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Qty</Form.Label>
          <Form.Control
            type="qty"
            placeholder="Qty"
            onChange={ (e) => setQty(e.target.value) }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={disableButton}>
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(ReduceStockForm);
