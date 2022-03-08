import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  WrapperCart,
  TitleCart,
  ContentCart,
  Product,
  ProductDetail,
  ImageCart,
  Details,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  TotalGeneral,
  SubTotalGeneral,
  Taxes,
  Top,
  TopText,
} from "./styledComponents";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <WrapperCart>
      <TitleCart>TU COMPRA</TitleCart>

      <Top>
        <Link to="/">
          <Button variant="outline-secondary">Continuar comprando</Button>
        </Link>
        {cart.cartList.length > 0 ? (
          <Button variant="danger" onClick={cart.removeItems}>
            Eliminar Todos
          </Button>
        ) : (
          <TopText>El carrito de compras está vacío.</TopText>
        )}
      </Top>
      <hr />
      <ContentCart>
        {cart.cartList.length > 0 &&
          cart.cartList?.map((item) => (
            <>
              <Product id={item.id}>
                <ProductDetail>
                  <ImageCart src={item.image} />
                  <Details>
                    <span>
                      <b>Producto:</b>
                      {item.name}
                    </span>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{item.qty} items</ProductAmount>
                    <ProductAmount>Precio Unidad: ${item.cost} </ProductAmount>
                    <ProductAmount>
                      Subtotal: ${cart.calcTotalItem(item.id)}
                    </ProductAmount>
                    <Button
                      variant="outline-danger"
                      onClick={() => cart.removeItem(item.id)}
                    >
                      <Trash />
                    </Button>
                  </ProductAmountContainer>
                </PriceDetail>
              </Product>
              <hr />
            </>
          ))}
        {cart.cartList.length > 0 && (
          <>
            <SubTotalGeneral>Subtotal: ${cart.calcSubTotal()}</SubTotalGeneral>
            <Taxes>Impuestos: ${cart.calcTaxes()}</Taxes>
            <TotalGeneral>Total: ${cart.calcTotal()}</TotalGeneral>
            <Link to={"/checkout"}>
              <Button variant="secondary">Comprar</Button>
            </Link>
          </>
        )}
      </ContentCart>
    </WrapperCart>
  );
};

export default Cart;
