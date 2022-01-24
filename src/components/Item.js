
import { Button, Card } from 'react-bootstrap';

const Item = ({ item }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>Stock: {item.stock}</p>
                    <p>Precio: {item.cost}</p>
                </Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
        </Card>

    );
}

export default Item;