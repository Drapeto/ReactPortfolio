import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css'

function Navbar() {
    return (
        <>
            <nav className="topnav">
                {/* <!-- Navigation links (hidden by default) --> */}
                <Nav className="justify-content-end" variant="pills" activeKey="/">
                    <Nav.Item>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link" : "nav-link"}>Portfolio</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact" className={window.location.pathname === "/Contact" ? "nav-link" : "nav-link"}>Contact</Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </>
    )
};

export default Navbar;