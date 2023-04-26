import './App.scss';
// uncomment when we have RateToppingsPage
//import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarMobile from './Navbar/NavbarMobile';
import './styles/_colors.scss'
import WindowSizeContext from './WindowSizeContext';
import {useEffect, useState} from 'react'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })
  }, [])

  return (
    <div className="App">

        <WindowSizeContext.Provider value={windowSize}>
      {/* uncomment when we have rate toppings page */}
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RateToppingsPage/>}
        </Routes>
      </BrowserRouter> */}
          {(windowSize.width < 850) ? <NavbarMobile /> : <NavbarDesktop />}
        </WindowSizeContext.Provider>
    </div>
  )
}

export default App;
