import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

function Input({ onChange, value, type, placeholder }) {
    return <input className={styles.search} onChange={onChange} value={value} type={type} placeholder={placeholder} />;
}

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
