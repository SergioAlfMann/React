import {  useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState (initial); //HOOKS    
    const agregar = () => {
         if (cantidad < stock) {
             setCantidad (cantidad + 1);
         }
         else {
             console.log("No existen mas elementos en stock")
        }
    }
    const quitar = () => {
        if (cantidad !== initial) {
            setCantidad(cantidad - 1);
        }
        else {
            console.log("Se quitaron todos los elementos")
        }    
    }

    return (
     
    <div class="container-fluid">
        <p className="itemCount">
             <button type="button" class="btn btn-primary" onClick={agregar}>+</button>   {cantidad}
             <button type="button" class="btn btn-primary" onClick={quitar}>-</button>
        </p>
        <p>
         {
            stock
            ? <button type="button" class="btn btn-success" onClick={()=>onAdd(cantidad)}>Agregar al Carrito</button>   
            : <button type="button" class="disabled" >Agregar al Carrito</button> 
         }
        </p>
    </div>

    );
}

export default ItemCount;
