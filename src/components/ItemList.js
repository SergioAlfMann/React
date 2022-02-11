import Item from "./Item";
import { Container } from "react-bootstrap";

const ItemList = ( { items }) => {
    return (
        <Container fluid>
            <div class="col">
                <div class="row">
                    {
                         items.length > 0
                         ? items.map(producto => (
                            <Item  key={producto.id} item={producto}></Item>                           
                        ))
                        :<p> Cargando ...</p>
                    }
                 </div>
            </div>        
        </Container>
        );
}

export default ItemList;