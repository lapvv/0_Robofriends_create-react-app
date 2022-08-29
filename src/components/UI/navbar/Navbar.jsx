import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <Link to="/about" className="navbar_links">About me</Link>
                <Link to="/reactpet" className="navbar_links">React Pet proj</Link>
                <Link to="/smoothie" className="navbar_links">Smoothie (w/o JS)</Link>
                <Link to="/mogo" className="navbar_links">Mogo (w/o JS)</Link>
            </div>
        </div>
    );
};

export default Navbar;