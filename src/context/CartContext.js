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
    
    const removeItems = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    } 

    const calcTotalItem = (idItem) => {
        let index = cartList.map(item => item.id).indexOf(idItem);
        return cartList[index].cost * cartList[index].qty;
    }

    const calcSubTotal = () => {
        let totalItem = cartList.map(item => calcTotalItem(item.id));
        return totalItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcTaxes();
    }

    return (
        <CartContext.Provider value={{cartList, removeItems, removeItem, addToCart, calcTotalItem,
             calcSubTotal, calcTaxes, calcTotal }}>
                {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;