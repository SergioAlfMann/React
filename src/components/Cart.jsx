import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, 
        ProductAmount, ProductPrice, TotalPrice, TotalGeneral, SubTotalGeneral, Taxes, Top, TopButton, TopText } from './styledComponents';
import { Button } from 'react-bootstrap';
import { increment, serverTimestamp, updateDoc} from 'firebase/firestore';
import { createOrderInFirestore } from '../utils/firebaseFetch';
import { Link } from 'react-router-dom';
import { doc } from '@firebase/firestore';
import {db} from '../utils/firebaseConfig'

const Cart = () => {
    const cart = useContext(CartContext);
    const createOrder = () =>{
        let order = {
            buyer: {
                name: 'Pepe Payaso',
                phone: '987654',
                email: 'pepe@payaso.com'
            },
            items: cart.cartList.map(item => ({
                id: item.id,
                price: item.cost,
                title: item.name,
                qty: item.qty
            })),
            date: serverTimestamp(),
            total: cart.calcTotal()
        }
        console.log('createOrder: ', order)

        createOrderInFirestore(order)
        .then(result => {
             alert (`Tu orden  (${result.id})  ha sido creada exitosamente.`);
             cart.cartList.forEach(async (item) => {
                 const itemRef = doc(db, "products", item.id);
                 await updateDoc(itemRef,{
                        stock: increment(-item.qty)
                 });
             })

             cart.removeItems();
        })        
        .catch(error => console.log(error))

    }

    return (
        
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>

            <Top>
                <Link to='/'><TopButton>Continuar comprando</TopButton></Link>
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
                        <Button onClick={createOrder}>Checkout now</Button>     
                    </>
                }
            </ContentCart>        
        </WrapperCart>        
    );
}

export default Cart;