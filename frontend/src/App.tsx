import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RateToppings/>}
        </Routes>
      </BrowserRouter> */}
      <NavbarDesktop />
    </div>
  )
}

export default App;
