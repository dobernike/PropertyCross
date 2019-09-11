import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <Link exact to="/">
                Главная
            </Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Link to="/page3">Page 3</Link>
        </nav>
    );
}

export default Menu;
