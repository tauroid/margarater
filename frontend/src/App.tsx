import './App.scss';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop';
import './styles/_colors.scss'

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
