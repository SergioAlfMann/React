import { createContext, useState } from "react";

export const CartContext = createContext();  

const CartContextProvider = ({children}) => {
    const [cartList, setCartList ] = useState([]);

    const addToCart = (item, cantidad) => {
        let found = cartList.find(product => product.id === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    cost: item.cost,
                    qty: cantidad
                }
            ]);
        } 
        else 
        {    
            found.qty += cantidad;
            setCartList([
                ...cartList
            ]);
        }
    }
    
    const removeItems = () =>{
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    } 
    return (
        <CartContext.Provider value={{cartList, removeItems, removeItem, addToCart}}>
                {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;