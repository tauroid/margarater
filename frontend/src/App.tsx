import './App.scss';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarMobile from './Navbar/NavbarMobile';
import './styles/_colors.scss'
import WindowSizeContext from './WindowSizeContext';
import {useEffect, useState} from 'react'

function App() {
  const [windowSizeWidth, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
		window.addEventListener('resize', (event) => {
      setWindowSize(window.innerWidth)
    })
	}, []) 

  return (
    <div className="App">
      <body>

        <WindowSizeContext.Provider value={windowSizeWidth}>
      {/* uncomment when we have rate toppings page */}
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RateToppingsPage/>}
        </Routes>
      </BrowserRouter> */}
      {(windowSizeWidth < 1330) ? <NavbarMobile /> : <NavbarDesktop />}
      </WindowSizeContext.Provider>
      </body>
    </div>
  )
}

export default App;
