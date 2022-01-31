//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';



function App() {
  return (
    <>
      <Navbar />
      {/*<ItemListContainer name="ItemListContainer" ></ItemListContainer>*/}
      <ItemDetailContainer />
      <ItemCount stock={5} initial={1} /> 
      
    </>
  );
}

export default App;
