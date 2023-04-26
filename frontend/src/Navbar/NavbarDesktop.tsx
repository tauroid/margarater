import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './NavbarDesktop.scss'
import '../styles/_colors.scss'

const NavbarDesktop = () => {
    return (
        <div>
            <nav>
                <BrowserRouter>
                    <Link className="links" to="/">Rate Toppings</Link>
                    <svg className="circle1" width="100" height="100">
	                    <circle cx="50" cy="50" r="40" fill="#BB3E00" />
                    </svg>
                    <svg className="circle2" width="100" height="100">
	                    <circle cx="50" cy="50" r="40" fill="#BB3E00" />
                    </svg>
                    <h1>Marga-Rater</h1>
                    <p className="links">Top 10 Toppings</p>
                    <svg className="circle3" width="100" height="100">
	                    <circle cx="50" cy="50" r="40" fill="#BB3E00" />
                    </svg>
                </BrowserRouter>
            </nav>
        </div>
    )   
}

export default NavbarDesktop