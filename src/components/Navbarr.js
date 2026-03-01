import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
    { path: '/general', label: 'General' },
    { path: '/business', label: 'Business' },
    { path: '/entertainment', label: 'Entertainment' },
    { path: '/health', label: 'Health' },
    { path: '/science', label: 'Science' },
    { path: '/sports', label: 'Sports' },
    { path: '/technology', label: 'Technology' },
];

const NavBar = () => {
    return (
        <header className="top-nav">
            <div className="brand-row">
                <NavLink className="brand" to="/">
                    News<span>X</span>
                </NavLink>
                <p className="brand-tag">Fresh headlines, mobile-first experience</p>
            </div>

            <nav className="category-nav" aria-label="News categories">
                {categories.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `category-chip ${isActive ? 'active' : ''}`}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default NavBar;
