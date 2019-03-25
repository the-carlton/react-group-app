import React from 'react';
import Clock from './Clock.js';
import PropTypes from 'prop-types';
import './header.css';

const Header = (props) => {
    const { branding, time } = props;
    return (
        <nav id={"nav"} className="navbar navbar-expand-sm navbar-dark bg mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <div id={"time"}><Clock /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'Default Header'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;