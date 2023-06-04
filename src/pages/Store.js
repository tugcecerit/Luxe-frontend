import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import React from "react";
import ShopBg from '../img/shop-bg.jpg'

function Store() {
    return (
    <>
<div className="position-relative">
  <img className="d-block w-100" src={ShopBg} alt="Background" />
  <h1 className="position-absolute top-50 start-50 translate-middle text-center p-3 shop-text">
    Welcome to Luxe Store!
  </h1>
  <button className="position-absolute top-50 start-50 translate-middle shop-button"><a href='/store#products'>Shop Now!</a></button>
</div>
        <Row xs={1} md={3} id="products" className='g-4'>
            {productsArray.map((product, idx) => (
            <Col align='center' key={idx}>
                <ProductCard  product={product}/>
            </Col>
        ))}
        </Row>
    </>
    )
}

export default Store;