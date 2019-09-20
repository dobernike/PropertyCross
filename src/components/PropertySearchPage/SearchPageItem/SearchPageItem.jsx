import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPageItem.css';

function SearchPageItem(props) {
    return <li className={styles.item}>{props.item}</li>;
}

SearchPageItem.propTypes = {
    item: PropTypes.string.isRequired,
};

export default SearchPageItem;
