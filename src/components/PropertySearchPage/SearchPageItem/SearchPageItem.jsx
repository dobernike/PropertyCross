import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPageItem.css';

function SearchPageItem(props) {
    return (
        <li className={styles.item}>
            <button className={styles.button} type="button" onClick={props.onClick.bind(null, props.item)}>
                {props.item}
            </button>
        </li>
    );
}

SearchPageItem.propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SearchPageItem;
