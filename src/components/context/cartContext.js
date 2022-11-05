import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartlist, setCartList] = useState([])

    const addItem = (product) => {
        const index = cartlist.findIndex(prod => product.id === prod.id)
        if (index === -1) {
            setCartList([ ...cartlist, product]) 
        } else {
            cartlist[index].amount += product.amount
            setCartList([...cartlist])
        }
    }

    const removeItem = (id) => {
        setCartList(cartlist.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCartList([])
    }

    const totalPrice = () => {
        return cartlist.reduce((acum, prod) => acum + (prod.amount * prod.price), 0)
    }

    const totalAmount = () => {
        return cartlist.reduce((acum, prod) => acum += prod.amount, 0)
    }

    return (
        <CartContext.Provider value={{cartlist, addItem, removeItem, emptyCart, totalPrice, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
}