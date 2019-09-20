import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './CustomLink.css';

function CustomLink({ href, children }) {
    return (
        <Link to={href} className={styles.link}>
            {children}
        </Link>
    );
}

CustomLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default CustomLink;
