import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import {  useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

const ItemDetail = ({ item }) => {
    const [estaAgregado, setEstaAgregado] = useState (false); 

    const itemsSeleccionados=(cantidad)=>{
        alert("Se agregaron " + cantidad + " items");
        setEstaAgregado(true);
     }
    return (
        <Container fluid>
            <div className='row'>
                <div className='col'>
                    <Card id={item.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={item?.image?.[0]} />

                            <Card.Title>{item.name}</Card.Title>

                            <Card.Text>
                                <p>Descripción: {item.description}</p>
                                <p>Stock: {item.stock}</p>
                                <p>Precio: {item.cost}</p>
                            </Card.Text>
                        </Card.Body>           
                    </Card>
                </div>
                <div className='col'>
                    {
                    estaAgregado
                    ? <Link to={"/cart"}>Finalizar Compra</Link>  
                    : <ItemCount stock={item.stock} initial={1} onAdd={itemsSeleccionados} />
                    }
                </div>
            </div>    

        
        </Container> 

    );
}

export default ItemDetail;