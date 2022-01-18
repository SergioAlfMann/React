import  CardWidget from './CardWidget';

const NavBar =()=>{
    return (
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi-Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarWithDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Opcion-1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Opcion-2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Opcion-3</a>
        </li>
       
        
      </ul>
    </div>
    <form class="d-flex">
      <CardWidget class="form-control me-2"/>

      </form>
  </div> 
</nav>
    );
}
export default NavBar;