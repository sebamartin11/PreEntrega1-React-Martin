// import Logotipo from './components/Logotipo/Logotipo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CartContent from './components/CartContent/CartContent';
import Banner from './components/Banner/Banner';
import Productos from './components/Productos/Productos';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error404 from './Views/Error404/Error404';
import Footer from './components/Footer/Footer';
import GlobalState from "./Context/GlobalContext";
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartState from './Context/CartContext';
import Category from './Views/Category/Category';
import Layout from './Layout/Layout'


function App() {
  return (
    <GlobalState>
      <CartState>
        <Layout>
          <Router>
              <div className= "body-css">
                <header>
                  <Navbar/>
                  <Banner/>
                </header>

                <main>
                  <Routes>  
                          <Route path='/' element = {<ItemListContainer/>} />
                          <Route path='/marcas/:category' element = {<Category/>} />
                          <Route path='/itemDetail/:id' element= {<ItemDetail />} />
                          <Route path='/cart' element={<CartContent/>}/>
                          <Route path='/Productos' element= {<Productos/>} />
                          <Route path='/Nosotros' element= {<Nosotros/>} />
                          <Route path='/Servicios' element= {<Servicios/>} />
                          <Route path='*' element = {<Error404/>} />
  
                  </Routes>
                </main>  

                <footer>
                  <Footer />
                </footer>

              </div>
          </Router>
        </Layout>
      </CartState>
    </GlobalState>
  );
}

export default App;
