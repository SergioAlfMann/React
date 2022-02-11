import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

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
                            <ProductPrice>$ {item.cost} each</ProductPrice>
                        </PriceDetail>
                    </Product>)) 
                }
                    
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;