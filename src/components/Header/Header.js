import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-slate-800 text-white">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-2xl" to='/'>Firebase Authentication</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/login'>Login</Link></li>
                <li><Link to= '/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;