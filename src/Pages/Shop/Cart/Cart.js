import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const cartProducts = useCart();
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    cartProducts?.map(product => <li
                        key={product.key}
                    >{product?.name}</li>)
                }
            </ul>
            <Link to="/check-out">
                <button className="btn shadow-none btn-primary px-3 py-2 rounded-pill">PROCEED TO CHECKOUT</button>
            </Link>
        </div>
    );
};

export default Cart;