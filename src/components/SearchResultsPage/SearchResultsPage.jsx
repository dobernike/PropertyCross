import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchResultsPage.css';
import Text from '../UI/Typography/Text/Text';
import ResultPageCart from './ResultPageCart/ResultPageCart';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import fetchResult from '../../store/actions/fetchResult';
import getApartmentId from '../../utils/getApartmentId';

class SearchResultsPage extends Component {
    state = {
        city: this.props.location.search.replace('?', ''),
        currentPage: 1,
        hasMore: true,
        totalPages: 0,
    };

    componentDidMount() {
        const { apartmentsList } = this.props;

        if (!apartmentsList.length) {
            this.loadItems();
        } else {
            this.setState({ currentPage: Math.floor(apartmentsList.length / 20) + 1 });
        }
    }

    loadItems = async () => {
        return this.props
            .fetchResult(this.state.city, this.state.currentPage)
            .then(this.updateState)
            .catch((err) => this.setState({ errorMessage: err }));
    };

    updateState = (response) => {
        const { total_results: totalResults, page, total_pages: totalPages } = response;

        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1,
            hasMore: page < totalPages,
            totalPages: totalResults,
        }));
    };

    render() {
        const { totalPages, errorMessage, hasMore, city } = this.state;
        const { apartmentsList } = this.props;

        if (errorMessage) {
            return <div>{errorMessage.toString()}</div>;
        }

        if (!apartmentsList.length) {
            return <div>loading...</div>;
        }

        return (
            <>
                <div className={styles.matches}>
                    <Text center bold>
                        {apartmentsList.length} of {totalPages === 0 ? apartmentsList.length : totalPages} matches
                    </Text>
                </div>
                <InfiniteScroll loadMore={this.loadItems} hasMore={hasMore}>
                    <ul>
                        {apartmentsList.map((apartment) => (
                            <ResultPageCart
                                key={apartment.lister_url}
                                city={city}
                                id={getApartmentId(apartment)}
                                image={apartment.thumb_url}
                                price={apartment.price_formatted}
                                bedroomNumber={+apartment.bedroom_number}
                                title={apartment.title}
                            />
                        ))}
                    </ul>
                </InfiniteScroll>
            </>
        );
    }
}

SearchResultsPage.propTypes = {
    location: PropTypes.object.isRequired,
    apartmentsList: PropTypes.array.isRequired,
    fetchResult: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    apartmentsList: state.apartmentsList.apartmentsList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchResult: (city, page) => dispatch(fetchResult(city, page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResultsPage);
