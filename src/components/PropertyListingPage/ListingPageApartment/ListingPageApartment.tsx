import React from 'react';
import { Apartment } from '../../../store/reducers/apartmentsListReducer';
const styles = require('./ListingPageApartment.css');

function ListingPageApartment({ price, title, img, bedroom, bathroom, summary }: Apartment) {
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

export default ListingPageApartment;
