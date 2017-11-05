import React from 'react';

function Header() {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="">Totally Not a Portal</a>
                <a className="navbar-brand" href="">Login / Logout</a>
            </nav>
        </div>
    );
}

export default Header