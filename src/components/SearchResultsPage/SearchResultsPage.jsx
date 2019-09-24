import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchResultsPage.css';
import Text from '../UI/Typography/Text/Text';
import ResultPageCart from './ResultPageCart/ResultPageCart';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import fetchResult from '../../store/actions/fetchResult';
class SearchResultsPage extends Component {
    state = {
        city: this.props.location.search.replace('?', ''),
        currentPage: 1,
        hasMore: true,
        results: [],
        errorMessage: null,
        totalPages: null,
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        return this.props
            .fetchResult(this.state.city, this.state.currentPage)
            .then(this.updateState)
            .catch((err) => this.setState({ errorMessage: err }));
    };

    updateState = (response) => {
        const { listings, total_results: totalResults, page, total_pages: totalPages } = response;

        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1,
            hasMore: page < totalPages,
            results: [...prevState.results, ...listings],
            totalPages: totalResults,
        }));
    };

    render() {
        const { results, totalPages, errorMessage, hasMore } = this.state;

        if (!results.length) {
            return <div>loading...</div>;
        }

        if (errorMessage !== null) {
            return <div>{errorMessage.toString()}</div>;
        }

        return (
            <>
                <div className={styles.matches}>
                    <Text center bold>
                        {results.length} of {totalPages} matches
                    </Text>
                </div>
                <InfiniteScroll loadMore={this.loadItems} hasMore={hasMore}>
                    <ul>
                        {results.map((it) => (
                            <ResultPageCart
                                key={it.lister_url}
                                image={it.thumb_url}
                                price={it.price_formatted}
                                bedroomNumber={+it.bedroom_number}
                                title={it.title}
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
    fetchResult: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    fetchResult: (city, page) => dispatch(fetchResult(city, page)),
});

export default connect(
    null,
    mapDispatchToProps
)(SearchResultsPage);
