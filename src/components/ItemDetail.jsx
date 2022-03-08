import { Card, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import {  useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const [estaAgregado, setEstaAgregado] = useState (false); 
    const cart = useContext(CartContext);
    const itemsSeleccionados=(cantidad)=>{
        cart.addToCart(item, cantidad);
        setEstaAgregado(true);
     }
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card id={item.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={item?.image} />

                            <Card.Title>{item.name}</Card.Title>

                            <Card.Text>
                                <p>Descripción: {item.description}</p>
                                <p>Stock: {item.stock}</p>
                                <p>Precio: {item.cost}</p>
                            </Card.Text>
                        </Card.Body>           
                    </Card>
                </Col>
                <Col md="auto">
                    {
                    estaAgregado
                    ? <Link to={"/cart"}><Button variant="secondary">Finalizar Compra</Button></Link>  
                    : <ItemCount item={item.id} stock={item.stock} initial={1} onAdd={itemsSeleccionados} />
                    }
                </Col>
            </Row>    
        </Container> 
    );
}

export default ItemDetail;