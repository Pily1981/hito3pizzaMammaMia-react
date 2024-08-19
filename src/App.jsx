import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/NavBar';
//import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import Cart from './Componentes/Cart';
//import Register from './componentes/Register';
//import Login from './componentes/Login';


function App() {
  
  return (
    <>      
      <Navbar/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      <Cart/>
      <Footer/>
      </>

  );
}

export default App;