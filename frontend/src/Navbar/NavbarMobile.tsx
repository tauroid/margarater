import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './NavbarMobile.scss'
import '../styles/_colors.scss'

const NavbarMobile = (): JSX.Element  => {
    return (
        <div>
            <nav className="navbarMobile">
                <BrowserRouter>
                    <h1>Marga-Rater</h1>
                    <div className='links-container'>
                    <Link className="links" to="/">Rate Toppings</Link>
                    {/* replace with Link in S3*/}
                    <p className="links">Top 10 Toppings</p>
                    </div>
                </BrowserRouter>
            </nav>
        </div>
    )   
}

export default NavbarMobile