import {  useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ item, stock, initial, onAdd }) => {
    const cart = useContext(CartContext);
    const [cantidad, setCantidad] = useState (initial); 
    const qtyItem = cart.calcQty(item);
    const agregar = () => {
        console.log(qtyItem)
         if (cantidad < (stock - qtyItem)) {
             setCantidad (cantidad + 1);
         }
         else {   
             alert("No existen más elementos en stock")
        }
    }
    const quitar = () => {
        if (cantidad !== initial) {
            setCantidad(cantidad - 1);
        }
        else {
            alert("Se quitaron todos los elementos")
        }    
    }

    return (
     
    <div class="container-fluid">
        <p className="itemCount">
             <button type="button" class="btn btn-primary" onClick={quitar}>-</button> {cantidad}
             <button type="button" class="btn btn-primary" onClick={agregar}>+</button>  
            
        </p>
        <p>
         {
            ( stock - qtyItem ) 
            ? <button type="button" class="btn btn-success" onClick={()=>onAdd(cantidad)}>Agregar al Carrito</button>   
            : <button type="button" class="disabled" >Agregar al Carrito</button> 
         }
        </p>
    </div>

    );
}

export default ItemCount;
