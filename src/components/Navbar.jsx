  import { Link } from 'react-router-dom';
  import CardWidget from './CardWidget';
  //import { Container, Navbar } from 'react-bootstrap';

 const Navbar = () => {
  return (

  
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
      <div class="container">
        <Link to="/" className='navbar-brand'>E-COMMERCE</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarWithDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/category/JvJ74ipJJyt1QZLr3tPS" className='nav-link'>Sin Alcohol</Link>
            </li>
            <li class="nav-item">
              <Link to="/category/8bv8FfxIPOxDbB7tw2bG" className='nav-link'>Vinos</Link>
            </li>
            <li class="nav-item">
              <Link to="/category/BGZhDyErH7Ltl1wbsouj" className='nav-link'>Licores</Link>
            </li>
          </ul>
        </div>
        <form class="d-flex">
        <Link to="/cart" className='nav-link'>
          <CardWidget class="form-control me-2" />
        </Link>         
        </form>
      </div>
    </nav>
  );
}
export default Navbar; 

