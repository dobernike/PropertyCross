import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ResultPageCart.css';
import Text from '../../UI/Typography/Text/Text';

function SearchResultsPage({ id, city, image, price, bedroomNumber, title }) {
    return (
        <li>
            <Link to={`/listing?${city}#${id}`} className={styles.link}>
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
            </Link>
        </li>
    );
}

SearchResultsPage.propTypes = {
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedroomNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default SearchResultsPage;
