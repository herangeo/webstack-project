import React from 'react';
import './header.css';


function Header() {


    return (
        <div className="parent-header">
            <div className="header">
                <h1>XitoMusic</h1>
                <nav>
                    <ul>
                        <li><i className="fas fa-envelope"></i></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
