<<<<<<< HEAD
import {Topping} from "./RateToppingCard/RateToppingCard";
import RateToppingCard from "./RateToppingCard/RateToppingCard";

=======
import './App.scss';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop';
import './styles/_colors.scss'
>>>>>>> 0d5bccbb2f1de26cf82529c795cb8bd1607cf63b

function App() {
  const VegTopping: Topping = {
      _id: "1",
      name: 'Aubergine',
      category: 'Veg',
      img: 'images/aubergine.jpg' 
  }

  return (
<<<<<<< HEAD
   <>
    <RateToppingCard cardTopping={VegTopping} get2randomToppings={()=>{}} rateToppings={()=>{}}/>  
  </>
  );
=======
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RateToppings/>}
        </Routes>
      </BrowserRouter> */}
      <NavbarDesktop />
    </div>
  )
>>>>>>> 0d5bccbb2f1de26cf82529c795cb8bd1607cf63b
}

export default App;
