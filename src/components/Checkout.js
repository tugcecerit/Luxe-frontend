import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Checkout() {
    const cart = useContext(CartContext)
    const URL = process.env.REACT_APP_BASE_URL
    const checkout = async () => {
        await fetch(`${URL}/checkout`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        });
    }

    return <button className='btn btn-secondary btn-block mt-3' onClick={checkout} style={{ fontSize: "22px" }}>Checkout</button>;
}

export default Checkout;
