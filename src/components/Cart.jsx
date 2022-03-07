import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, 
        ProductAmount, ProductPrice, TotalPrice, TotalGeneral, SubTotalGeneral, Taxes, Top, TopButton, TopText } from './styledComponents';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext);

    return (
        
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>

            <Top>
                <Link to='/'><TopButton >Continuar comprando</TopButton></Link>
                {
                    (cart.cartList.length > 0)
                    ? <TopButton type="filled" onClick={cart.removeItems}>Eliminar Todos</TopButton>
                    : <TopText>El carrito de compras está vacío.</TopText>
                }
            </Top>

        
            <ContentCart>
                {

                    cart.cartList.length > 0 && cart.cartList?.map( item => (
                    <Product>
                        <ProductDetail>
                            <ImageCart src={item.image} />
                            <Details>
                            <span>
                                <b>Producto:</b>{item.name}
                            </span>
                            <button onClick={()=> cart.removeItem(item.id)}>Eliminar Este Producto</button>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qty} items</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.cost} Cada Producto</ProductPrice>
                            <TotalPrice>$ {cart.calcTotalItem(item.id)} Sub-Total</TotalPrice>                            
                        </PriceDetail>
                    </Product>))            
                }  
                {
                    cart.cartList.length > 0 && 
                    <>
                        <SubTotalGeneral>
                        SubTotal $ {cart.calcSubTotal()}
                        </SubTotalGeneral>
                        <Taxes>
                        Impuestos $ {cart.calcTaxes()}
                        </Taxes>
                        <TotalGeneral>
                        Total $ {cart.calcTotal()}
                        </TotalGeneral>
                        <Link to={'/checkout'}><Button>Checkout now</Button></Link>     
                    </>
                }
            </ContentCart>        
        </WrapperCart>        
    );
}

export default Cart;