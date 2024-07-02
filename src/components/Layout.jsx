import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <>
            <header className={isContactPage ? 'header-contact' : ''}>
                <nav className={`navbar ${isContactPage ? 'navbar-contact' : ''}`}>
                    <h2 style={{ "margin": "1rem" }}><Link to='/' >HomeHaven</Link></h2>
                    <ul className="nav-items">
                        <li>Properties</li>
                        <li>About Us</li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
                <Outlet />
            <footer className={isContactPage ? 'footer-contact' : ''}>
                <div className="social">
                    <a href="facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="google.com"><i className="fa-brands fa-google"></i></a>
                </div>
                <p>&copy;Mana 2024.  All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Layout;