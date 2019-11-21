import React from 'react';

const styles = require('./SearchPageItem.css');

type Props = {
    item: string;
    onClick: Function;
};

function SearchPageItem({ onClick, item }: Props) {
    return (
        <li className={styles.item}>
            <button className={styles.button} type="button" onClick={onClick.bind(null, item)}>
                {item}
            </button>
        </li>
    );
}

export default SearchPageItem;
