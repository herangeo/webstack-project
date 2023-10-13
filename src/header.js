import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="parent-header">
            <div className="header">
                <h1>XitoMusic</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/contactform.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <i className="fas fa-envelope" style={{ color: 'red'}}></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
