
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
     <NavBar />
      <ItemListContainer greeting="Bienvenido a mi tienda" >
      </ItemListContainer>
    </>
  );
}

export default App;
