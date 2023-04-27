import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import RateToppingsPage from './RateToppingsPage/RateToppingsPage'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'
import WindowSizeContext from './WindowSizeContext'
import './App.scss'
import './styles/_colors.scss'


function App(): JSX.Element {

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
    <WindowSizeContext.Provider value={windowSize}>
      {(windowSize.width < 850) ? <NavbarMobile /> : <NavbarDesktop />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RateToppingsPage />} />
        </Routes>
      </BrowserRouter>
    </WindowSizeContext.Provider>
  );

}

export default App
