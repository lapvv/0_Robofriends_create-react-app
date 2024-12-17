import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <Link to="/about" className="navbar_links">About me</Link>
                {/* <Link to="/reactpet" className="navbar_links">React Pet proj</Link> */}
                <Link to="/smoothie" className="navbar_links">Smoothie project</Link>
                <Link to="/Mogo" className="navbar_links">Mogo project</Link>
            </div>
        </div>
    );
};

export default Navbar;