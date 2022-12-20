// import Logotipo from './components/Logotipo/Logotipo';
import { BrowserRouter as Router, Routes, Route, NavLink, Form } from 'react-router-dom'
import './App.css';

// Componets
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css";
import "./components/Cards/Card.css";
import Banner from './components/Banner/Banner';
import "./components/Banner/Banner.css"
import Productos from './components/Productos/Productos';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error404 from './components/404/Error404';


function App() {
  return (
    <Router>
        <Navbar/>
        <Banner/>
        <div className= "body-css">
        
          <Routes>  
                
                  <Route path='/' element = {<ItemListContainer/>} />
                  <Route path='/category/:id' element= {<ItemListContainer/>} />
                  <Route path='/item/detail/:id' element= {<ItemDetailContainer />} />
                  <Route path='/Productos' element= {<Productos/>} />
                  <Route path='/Nosotros' element= {<Nosotros/>} />
                  <Route path='/Servicios' element= {<Servicios/>} />
                  <Route path='*' element = {<Error404/>} />
          </Routes>
        </div>

      
    </Router>
  );
}

export default App;
