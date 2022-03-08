import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useMemo } from "react";
import { Badge } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const cart = useContext(CartContext);
  const total = cart.cartList.reduce(
    (previousValue, currentValue) => previousValue + currentValue.qty,
    0
  );
  return useMemo(() => {
    return total > 0 ? (
      <Link to="/cart">
        <CartFill color="black" size={32} />
        <Badge pill bg="danger">{total}</Badge>
      </Link>
    ) : (
      <Link to="/cart">
        <CartFill color="black" size={32} />
      </Link>
    );
  }, [total]);
};
export default CardWidget;
