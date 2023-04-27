import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'
import './styles/_colors.scss'
import WindowSizeContext from './WindowSizeContext'
import {useEffect, useState} from 'react'
import TopTenToppingsPage from './TopTenToppingsPage/TopTenToppingsPage'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <WindowSizeContext.Provider value={windowSize}>
          {(windowSize.width < 930)
          ? <NavbarMobile />
          : <NavbarDesktop />}

          <Routes>
            <Route path="/" element={<div>Rate toppings</div> /*<RateToppingsPage/>*/}/>
            <Route path="/top10" element={<TopTenToppingsPage/>}/>
          </Routes>
        </WindowSizeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
