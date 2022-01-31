import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    return (

        <Card id={item.id} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={item.image[0]} />

                <Card.Title>{item.name}</Card.Title>

                <Card.Text>
                    <p>Descripción: {item.description}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Precio: {item.cost}</p>
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default ItemDetail;