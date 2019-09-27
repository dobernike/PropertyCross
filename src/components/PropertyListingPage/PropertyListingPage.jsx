import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './PropertyListingPage.css';
import isApartmentInStorage from '../../store/actions/isApartmentInStorage';
import Title from '../UI/Typography/Title/Title';
import Button from '../UI/Button/Button';
import getApartment from '../../store/actions/getApartment';
import ListingPageApartment from './ListingPageApartment/ListingPageApartment';
import toggleFavorite from '../../store/actions/toggleFavorite';
import ErrorIndicator from '../Error/ErrorIndicator/ErrorIndicator';
class PropertyListingPage extends Component {
    state = {
        city: this.props.location.search.replace('?', ''),
        apartmentId: this.props.location.hash.replace('#', ''),
        isFavorite: false,
        errorMessage: '',
    };

    componentDidMount() {
        getApartment({
            apartments: this.props.apartmentsList,
            apartmentId: this.state.apartmentId,
            city: this.state.city,
            numberPageLoad: 1,
        })
            .then((apartment) =>
                this.setState({ apartment, isFavorite: isApartmentInStorage('favorites', apartment, this.state.city) })
            )
            .catch((err) => this.setState({ errorMessage: err }));
    }

    handleClick = () => {
        const { apartment, city } = this.state;

        this.setState({ isFavorite: toggleFavorite(apartment, city) });
    };

    render() {
        const { apartment, isFavorite, errorMessage } = this.state;

        if (errorMessage) {
            return <ErrorIndicator errorMessage={errorMessage.toString()} />;
        }

        if (!apartment) {
            return <div>loading...</div>;
        }

        const {
            price_formatted: price,
            title,
            img_url: img,
            bedroom_number: bedroom,
            bathroom_number: bathroom,
            summary,
        } = apartment;

        return (
            <>
                <div className={styles.wrapper}>
                    <Title>Property Details</Title>
                    <Button onClick={this.handleClick}>{isFavorite ? '-' : '+'}</Button>
                </div>
                <ListingPageApartment
                    price={price}
                    title={title}
                    img={img}
                    bedroom={+bedroom}
                    bathroom={+bathroom}
                    summary={summary}
                />
            </>
        );
    }
}

PropertyListingPage.propTypes = {
    location: PropTypes.object.isRequired,
    apartmentsList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    apartmentsList: state.apartmentsList.apartmentsList,
});

export default connect(
    mapStateToProps,
    null
)(PropertyListingPage);
