import React from 'react';
import "./_navbar.scss";
// import { Navbar, Nav, Container } from 'bootstrap';
import Logo from '../Image/logo.png'
import {Link} from 'react-scroll';

const HeaderNavbar = ({onLoginModal}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className='navbar-brand' to='home' smooth={true} duration={500}>Home</Link>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="price" smooth={true} duration={500}>Price</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="login" smooth={true} duration={500}>
                                <span className="btn btn-outline-info" >Search</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavbar