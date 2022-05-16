import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Register</Link></li>
                <li><Link to='/dash'>Dashboard</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
                <li><Link to='/graph'>Graph</Link></li>
                {/* <li><Link to="/activate">Activate</Link></li>   */}
            </ul>
        </div>
    )
}

export default Navbar
