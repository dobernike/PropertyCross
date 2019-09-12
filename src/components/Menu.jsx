import React from 'react';
import { NavLink } from 'react-router-dom';

import link from '../styles/Link.css';

function Menu() {
    return (
        <nav>
            <NavLink exact="true" to="/" activeClassName={link.active}>
                Главная
            </NavLink>
            <NavLink to="/page1" activeClassName={link.active}>
                Page 1
            </NavLink>
            <NavLink to="/page2" activeClassName={link.active}>
                Page 2
            </NavLink>
            <NavLink to="/page3" activeClassName={link.active}>
                Page 3
            </NavLink>
        </nav>
    );
}

export default Menu;
