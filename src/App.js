import Logotipo from './components/Logotipo/Logotipo';
import './App.css';
import "./components/navbar/Navbar.css";
import Card from './components/cards/Card'
import "./components/cards/Card.css";
import Main from './components/main/Main';
// array de productos
const misCards = [
{
  id : 1,
  titulo : "Tradicional x 60",
  descripcion : "$128.00",
  img : "https://www.alpuntodeventa.com.ar/wp-content/uploads/0121-1.jpg",
  btnText : "Comprar"
},
{
  id : 2,
  titulo : "Americano x 60",
  descripcion : "$128.00",
  img : "https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/0152-1.jpg?resize=300%2C300&ssl=1",
  btnText : "Comprar"
},
{
  id : 3,
  titulo : "Sin sal x 60",
  descripcion : "$128.00",
  img : "https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/0139.jpg?resize=300%2C300&ssl=1",
  btnText : "Comprar"
},
{
  titulo : "Jamón x 55",
  descripcion : "$140.00",
  img : "https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/0134.jpg?resize=300%2C300&ssl=1",
  btnText : "Comprar",
},
{
  id : 4,
  titulo : "Cheddar x 55",
  descripcion : "$140.00",
  img : "https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/0133.jpg?resize=300%2C300&ssl=1",
  btnText : "Comprar"
},
{
  id : 5,
  titulo : "Ketchup x 55",
  descripcion : "$140.00",
  img : "https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/2770.gif?resize=300%2C300&ssl=1",
  btnText : "Comprar"
}
]

function App() {
  return (
    <div className= "body-css">
      <Main>
        <div className="d-flex">
          {misCards.map(({titulo, descripcion, img, btnText}, id) => (
            <Card
              key = {id}
              titulo = {titulo}
              descripcion = {descripcion}
              img = {img}
              btnText = {btnText}
            />)
          )}
        </div>
        
      </Main>
    </div>
  );
}

export default App;
