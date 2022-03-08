import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  WrapperCart,
  TitleCart,
  ContentCart,
  TotalGeneral,
  SubTotalGeneral,
  Taxes,
  Top,
  TopText,
} from "./styledComponents";
import { Button, Table, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { increment, serverTimestamp, updateDoc } from "firebase/firestore";
import { createOrderInFirestore } from "../utils/firebaseFetch";
import { doc } from "@firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Form from "react-bootstrap/Form";

const Checkout = () => {
  const cart = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [buyerData, setBuyerData] = useState({
    name: "",
    phone: "",
    email: "",
    repeatEmail: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    form.checkValidity();
    setValidated(true);
    createOrder(form.checkValidity());
  };

  const createOrder = (isValid) => {
    if (!isValid) return;

    if(buyerData.email !== buyerData.repeatEmail){
        alert("El email y su repetición no coinciden.")
        return;
    }

    let order = {
      buyer: {
        name: buyerData.email,
        phone: buyerData.phone,
        email: buyerData.email,
      },
      items: cart.cartList.map((item) => ({
        id: item.id,
        price: item.cost,
        title: item.name,
        qty: item.qty,
      })),
      date: serverTimestamp(),
      total: cart.calcTotal(),
    };

    createOrderInFirestore(order)
      .then((result) => {
        alert(`Tu orden  (${result.id})  ha sido creada exitosamente.`);
        cart.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qty),
          });
        });

        cart.removeItems();
      })
      .catch((error) => console.log(error));
  };

  return (
    <WrapperCart>
      <TitleCart>TU COMPRA</TitleCart>

      <Top>
        {cart.cartList.length > 0 ? (
          <></>
        ) : (
          <TopText>El carrito de compras está vacío.</TopText>
        )}
      </Top>
      <hr />
      {cart.cartList.length > 0 && (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartList.length > 0 &&
                cart.cartList?.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.cost}</td>
                    <td>${cart.calcTotalItem(item.id)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <ContentCart>
            {cart.cartList.length > 0 && (
              <>
                <SubTotalGeneral>
                  Subtotal: ${cart.calcSubTotal()}
                </SubTotalGeneral>
                <Taxes>Impuestos: ${cart.calcTaxes()}</Taxes>
                <TotalGeneral>Total: ${cart.calcTotal()}</TotalGeneral>
              </>
            )}
          </ContentCart>

          <hr />

          <TitleCart>TUS DATOS</TitleCart>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} md="4" className="mb-1" controlId="formName">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Nombre"
                required
                value={buyerData.name}
                onChange={(e) =>
                  setBuyerData({ ...buyerData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-1" controlId="formPhone">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Teléfono"
                required
                value={buyerData.phone}
                onChange={(e) =>
                  setBuyerData({ ...buyerData, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="mb-1"
              controlId="formBasicEmail"
            >
              <Form.Control
                size="sm"
                type="email"
                placeholder="Email"
                required
                value={buyerData.email}
                onChange={(e) =>
                  setBuyerData({ ...buyerData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="mb-1"
              controlId="formBasicEmail"
            >
              <Form.Control
                size="sm"
                type="email"
                placeholder="Repite Email"
                required
                value={buyerData.repeatEmail}
                onChange={(e) =>
                  setBuyerData({ ...buyerData, repeatEmail: e.target.value })
                }
              />
            </Form.Group>
            <Button type="submit" variant="secondary">
              Comprar ahora
            </Button>
          </Form>
        </>
      )}
    </WrapperCart>
  );
};

export default Checkout;
