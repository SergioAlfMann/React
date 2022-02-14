import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, TotalPrice, TotalGeneral } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);
    const total =  test.cartList.reduce(
        (previousValue, currentValue) => previousValue + (currentValue.qty * currentValue.cost)
        , 0)

    return (
        
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <button onClick={test.removeItems}>Eliminar Todos</button>
            <ContentCart>
                {
                    test.cartList.map( item => (
                    <Product>
                        <ProductDetail>
                            <ImageCart src={item.image} />
                            <Details>
                            <span>
                                <b>Product:</b>{item.name}
                            </span>
                            <button onClick={()=> test.removeItem(item.id)}>Eliminar Este Producto</button>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qty} items</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.cost} Cada Producto</ProductPrice>
                            <TotalPrice>${item.qty * item.cost} Sub-Total</TotalPrice>                            
                        </PriceDetail>
                    </Product>))            
                }  
                <TotalGeneral>
                   Total General {total}
                </TotalGeneral>              
            </ContentCart>        
        </WrapperCart>        
    );
}

export default Cart;