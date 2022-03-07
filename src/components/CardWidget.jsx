
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useMemo } from 'react';

const CardWidget = () => {
  const cart = useContext(CartContext);
  const total =  cart.cartList.reduce(
    (previousValue, currentValue) => previousValue + currentValue.qty
    , 0)
    return useMemo(() => {
      return (
             total > 0
            ?<><img src="carrito1.png" alt=""  />
                <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                {total}
                <span class="visually-hidden">productos</span>
                </span> </>       
            :<img src="carrito1.png" alt=""  />
      );
    }, [total])
}
export default CardWidget;