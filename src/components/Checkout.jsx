import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, Details, PriceDetail, ProductAmountContainer, 
        ProductAmount, ProductPrice, TotalPrice, TotalGeneral, SubTotalGeneral, Taxes } from './styledComponents';
import { Button } from 'react-bootstrap';
import { increment, serverTimestamp, updateDoc} from 'firebase/firestore';
import { createOrderInFirestore } from '../utils/firebaseFetch';
import { doc } from '@firebase/firestore';
import {db} from '../utils/firebaseConfig';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    const cart = useContext(CartContext);
    const createOrder = () =>{
        let order = {
            buyer: {
                name: 'Sergio Mann',
                phone: '987654',
                email: 'smann@gmail.com'
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
            <TitleCart>YOUR ORDER</TitleCart>
            
            <ContentCart>
                {

                    cart.cartList.length > 0 && cart.cartList?.map( item => (
                    <Product>
                        <ProductDetail>
                            <Details>
                           {item.name}
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
                    </>
                }
            </ContentCart>      
            <ContentCart>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirm Email address</Form.Label>
                    <Form.Control type="email" placeholder="Re-enter email" />
                </Form.Group>
                <Button onClick={createOrder}>Checkout now</Button>
                </Form>
            </ContentCart>  
        </WrapperCart>        
    );
}

export default Checkout;