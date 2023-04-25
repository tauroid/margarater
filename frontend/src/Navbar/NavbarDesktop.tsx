import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './NavbarDesktop.css'

const NavbarDesktop = () => {
    return (
        <div>
            <nav>
                <BrowserRouter>
                    <Link to="/">Rate Toppings</Link>
                    <h1>Marga-Rater</h1>
                    <p>Top 10 Toppings</p>
                </BrowserRouter>
            </nav>
        </div>
    )   
}

export default NavbarDesktop