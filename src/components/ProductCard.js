import { Card, Button, Form, Row, Col, Collapse } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext, useState } from 'react';
import React from 'react';
import { Link } from "react-router-dom";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Card style={{ backgroundColor: 'transparent', fontFamily: "Teko"}}>
      <Card.Body>
        <Card.Title style={{ fontSize: "30px", paddingTop: "20px"}}>{product.title}</Card.Title>
        <img src={product.img} alt={product.title} style={{ width: '15rem', height: '15rem' }} />
        <Card.Text style={{ fontSize: "25px"}}>${product.price}</Card.Text>
        <Link
          onClick={handleCollapse}
          aria-expanded={isCollapsed}
          aria-controls={`collapseExample-${product.id}`}
          className="detail-link"
          style={{ fontFamily: "Teko", fontSize: "25px" }}
        >
          Description <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(177, 177, 177)" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
        </svg>
        </Link><br></br>
        <Collapse in={isCollapsed}>
          <div id={`collapseExample-${product.id}`}>
            <div className="card card-body mt-2">
              <p id='description'>{product.description}</p>
            </div>
          </div>
        </Collapse><br></br>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6" className="cart-p" style={{ fontSize: "25px", fontFamily: "Teko" }}>In Cart: {productQuantity}</Form.Label>
              <Col>
                <Button variant="light" sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2" style={{ fontSize: "20px" }}>+</Button>
                <Button variant="light" sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2" style={{ fontSize: "20px"}}>-</Button>
              </Col>
            </Form>
            <Button variant="secondary" onClick={() => cart.deleteFromCart(product.id)} className="my-2" style={{ fontSize: "22px" }}>Remove</Button>
          </>
        ) : (
          <Button variant="secondary" onClick={() => cart.addOneToCart(product.id)} style={{ fontSize: "22px" }}>Add to Cart</Button>)}
      </Card.Body>
    </Card>
  );
}
export default ProductCard;
