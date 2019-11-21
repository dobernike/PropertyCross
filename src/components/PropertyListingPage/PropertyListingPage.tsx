import React, { Component } from 'react';
import { connect } from 'react-redux';
import isApartmentInStorage from '../../store/actions/isApartmentInStorage';
import Title from '../UI/Typography/Title/Title';
import Button from '../UI/Button/Button';
import getApartment from '../../store/actions/getApartment';
import ListingPageApartment from './ListingPageApartment/ListingPageApartment';
import toggleFavorite from '../../store/actions/toggleFavorite';
import ErrorIndicator from '../Error/ErrorIndicator/ErrorIndicator';
import { RootState } from '../../store/reducers/rootReducer';
import { Apartment } from '../../store/reducers/apartmentsListReducer';

const styles = require('./PropertyListingPage.css');

type State = {
    city: string;
    apartmentId: string;
    apartment: any;
    isFavorite: boolean;
    errorMessage: string;
};
type Props = {
    location: { search: string; hash: string };
    history: { goBack: () => void };
    apartmentsList: Apartment[];
};

class PropertyListingPage extends Component<Props, State> {
    state: State = {
        city: this.props.location.search.replace('?', ''),
        apartmentId: this.props.location.hash.replace('#', ''),
        apartment: [],
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
                    <Button onClick={this.props.history.goBack}>Back</Button>
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

const mapStateToProps = (state: RootState) => ({
    apartmentsList: state.apartmentsList.apartmentsList,
});

export default connect(mapStateToProps)(PropertyListingPage);
