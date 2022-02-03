import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" className='navbar-brand'>E-COMMERCE</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarWithDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/category/9" className='nav-link'>Sin Alcohol</Link>
            </li>
            <li class="nav-item">
              <Link to="/category/1" className='nav-link'>Vinos</Link>
            </li>
            <li class="nav-item">
              <Link to="/category/5" className='nav-link'>Licores</Link>
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <CardWidget class="form-control me-2" />
        </form>
      </div>
    </nav>
  );
}
export default Navbar;