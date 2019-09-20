import React from 'react';
import PropTypes from 'prop-types';

import styles from './Text.css';

function Text(props) {
    return <p className={styles.text}>{props.children}</p>;
}

Text.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Text;
