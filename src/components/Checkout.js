import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

function Checkout() {
    const cart = useContext(CartContext)
    const checkout = async () => {
        await fetch('http://localhost:8000/checkout', {
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

    return <button className='btn btn-secondary btn-block mt-3' onClick={checkout}>Checkout</button>;
}

export default Checkout;
