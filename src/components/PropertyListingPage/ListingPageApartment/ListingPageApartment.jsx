import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListingPageApartment.css';

function ListingPageApartment({ price, title, img, bedroom, bathroom, summary }) {
    return (
        <>
            <p className={styles.price}>{price}</p>
            <p className={styles.location}>{title}</p>
            <img className={styles.img} src={img} alt="apartment" />
            <p className={styles.rooms}>
                {bedroom} bedroom, {bathroom} bathroom
            </p>
            <p>{summary}</p>
        </>
    );
}

ListingPageApartment.propTypes = {
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default ListingPageApartment;
