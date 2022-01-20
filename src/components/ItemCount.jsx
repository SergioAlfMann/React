import {  useState } from "react";


const ItemCount = ({ stock, initial }) => {
    const [cantidad, setCantidad] = useState (initial); //HOOKS    
    const agregar = () => {
         if (cantidad < stock) {
             setCantidad (cantidad + 1);
             console.log(cantidad);
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
        console.log(cantidad);
    }


    const itemsSeleccionados=()=>{
       alert("Se agregaron " + cantidad + " items");
    }


    return (
     
    <div class="container-fluid">
        <p className="itemCount">
             <button type="button" class="btn btn-primary" onClick={agregar}>+</button>   {cantidad}
             <button type="button" class="btn btn-primary" onClick={quitar}>-</button>
        </p>
        <p>
         <button type="button" class="btn btn-success" onClick={itemsSeleccionados}>Agregar elementos</button>   
        </p>
    </div>

    );
}

export default ItemCount;
