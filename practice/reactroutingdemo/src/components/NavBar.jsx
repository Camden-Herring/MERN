import React from 'react'
import {Link, Routes, Route} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

        <ul className='nav-bar'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"aboutus"}>About Us</Link></li>
        <li><Link to={"players"}>Players</Link></li>
        <li><Link to={"teams"}>Teams</Link></li>
            
        </ul>

        </div>
    )
}

export default NavBar;
