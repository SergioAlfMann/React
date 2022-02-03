import Item from "./Item";
import { Container, Row, Col, } from "react-bootstrap";

const ItemList = ( { items }) => {
    return (
        <Container fluid>
            <div class="col">
                <div class="row">
                    {
                        items.map(producto => (
                            <Item  key={producto.id} item={producto}></Item>                           
                        ))
                    }
                 </div>
            </div>
        </Container>
        );
}

export default ItemList;