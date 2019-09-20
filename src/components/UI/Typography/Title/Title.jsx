import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.css';

function Title(props) {
    return <h1 className={styles.title}>{props.children}</h1>;
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
