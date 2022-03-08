import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import { Navbar as NavbarBS, Container, Nav, Form } from "react-bootstrap";

const Navbar = () => {
  return (
    <NavbarBS bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          E-COMMERCE
        </Link>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category/JvJ74ipJJyt1QZLr3tPS" className="nav-link">
              Sin Alcohol
            </Link>
            <Link to="/category/8bv8FfxIPOxDbB7tw2bG" className="nav-link">
              Vinos
            </Link>
            <Link to="/category/BGZhDyErH7Ltl1wbsouj" className="nav-link">
              Licores
            </Link>
          </Nav>
        </NavbarBS.Collapse>
        <Form class="d-flex">
          <Link to="/cart" className="nav-link">
            <CardWidget class="form-control me-2" />
          </Link>
        </Form>
      </Container>
    </NavbarBS>
  );
};
export default Navbar;
