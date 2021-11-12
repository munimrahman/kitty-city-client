import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const savedCart = getStoredCart();
    useEffect(() => {
        const keys = Object.keys(savedCart);
        fetch('https://radiant-mesa-88609.herokuapp.com/products/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => {
                setCartProducts(data)
            })
    }, [savedCart])
    return cartProducts;
}

export default useCart;