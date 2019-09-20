import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

function Button({ type, onClick, children }) {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'text',
};

export default Button;
