import { useState, useEffect } from 'react';

export default function useCartQuantity(cartArrayLength) {
    const [cartQty, setCartQty] = useState(0)
    // useEffect(() => {
    //      setCartQty(cartArrayLength) 
    // })
    useEffect(() => {
        cartArrayLength ? setCartQty(cartArrayLength) : fetch("/api/users/x/cart")
            .then(async res => {
                    let json = await res.json();
                    setCartQty(json.message.length) 
            })
    }, [cartArrayLength])
    return cartQty;
}