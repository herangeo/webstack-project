import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="parent-footer">
            <div className="footer">
                <div className="copyright">
                    &copy; 2023 Xito Music
                </div>
                <div className="site-details">
                    <p>Makers of 'Kandam Vazhi' & 'Kottu Paattu',A Small Part of Kerala Indie Music Culture.</p>

                </div>
                <div className="social-links">
                    <a href="https://www.youtube.com/@XitoMusic"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
