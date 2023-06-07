import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return (
        <>
            <h3 style={{ fontSize: "35px" }}>{productData.title}</h3>
            <p className='cart-p'>{quantity} total</p>
            <p className='cart-p'>${(quantity * productData.price).toFixed(2)}</p>
            <Button variant="secondary" size="m" onClick={() => cart.deleteFromCart(id)} style={{ fontSize: "22px" }}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;

