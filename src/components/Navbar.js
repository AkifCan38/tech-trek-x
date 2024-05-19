import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const siteName = "TechTrekX".split("");

    return (
        <nav className="navbar">
            <div className="site-name">
                {siteName.map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
            <div className="nav-links">
                <Link to="/">
                    <FaHome className="icon" />
                    Product Page
                </Link>
                <Link to="/order">
                    <FaShoppingCart className="icon" />
                    Order
                </Link>
                <Link to="/news">
                    <FaNewspaper className="icon" />
                    News
                </Link>
                <Link to="/contact">
                    <FaEnvelope className="icon" />
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
