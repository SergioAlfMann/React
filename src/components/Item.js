
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={item?.image?.[0]} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>Stock: {item.stock}</p>
                    <p>Precio: {item.cost}</p>
                </Card.Text>
                <Link to={`/item/${item.id}`}>Ver detalle</Link>
            </Card.Body>
        </Card>

    );
}

export default Item;