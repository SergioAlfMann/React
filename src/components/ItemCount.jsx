import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ item, stock, initial, onAdd }) => {
  const cart = useContext(CartContext);
  const [cantidad, setCantidad] = useState(initial);
  const qtyItem = cart.calcQty(item);
  const agregar = () => {
    if (cantidad < stock - qtyItem) {
      setCantidad(cantidad + 1);
    } else {
      alert("No existen más elementos en stock");
    }
  };
  const quitar = () => {
    if (cantidad !== initial) {
      setCantidad(cantidad - 1);
    } else {
      alert("Se quitaron todos los elementos");
    }
  };

  return (
    <>
      <p className="itemCount">
        <Button variant="outline-secondary" onClick={quitar}>
          <Dash />
        </Button>
        &nbsp;&nbsp;{cantidad}&nbsp;&nbsp;
        <Button variant="outline-secondary" onClick={agregar}>
          <Plus />
        </Button>
      </p>
      <p>
        {stock - qtyItem ? (
          <Button variant="secondary" onClick={() => onAdd(cantidad)}>
            Agregar al Carrito
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            Agregar al Carrito
          </Button>
        )}
      </p>
    </>
  );
};

export default ItemCount;
