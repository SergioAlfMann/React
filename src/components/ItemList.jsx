import Item from "./Item";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        {items.length > 0 ? (
          items.map((producto) => (
            <Col>
              <Item id={producto.id} item={producto}></Item>
            </Col>
          ))
        ) : (
          <Spinner animation="border" className="justify-content-md-center" />
        )}
      </Row>
    </Container>
  );
};

export default ItemList;
