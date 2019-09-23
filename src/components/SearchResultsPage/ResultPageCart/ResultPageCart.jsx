import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResultPageCart.css';
import Text from '../../UI/Typography/Text/Text';

function SearchResultsPage({ image, price, bedroomNumber, title }) {
    return (
        <li>
            <div className={styles.cart}>
                <img src={image} className={styles.image} alt="apartment" />
                <div className={styles.wrapper}>
                    <div className={styles.price}>
                        <Text fontSizeMiddle>{price}</Text>
                    </div>

                    <Text>Bedrooms: {bedroomNumber}</Text>
                    <Text>{title}</Text>
                </div>
            </div>
        </li>
    );
}

SearchResultsPage.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedroomNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default SearchResultsPage;
