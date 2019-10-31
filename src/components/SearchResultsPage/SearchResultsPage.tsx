import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import CustomLink from '../UI/CustomLink/CustomLink';
import Text from '../UI/Typography/Text/Text';
import ResultPageCart from './ResultPageCart/ResultPageCart';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import fetchResult from '../../store/actions/fetchResult';
import getApartmentId from '../../utils/getApartmentId';
import { RootState } from '../../store/reducers/rootReducer';

const styles = require('./SearchResultsPage.css');

type State = {
    city: string;
    currentPage: number;
    hasMore: boolean;
    totalPages: number;
    errorMessage: string;
};
type Props = {
    location: { search: string };
    apartmentsList: any[];
    fetchResult: (city: string, page: number) => any;
};

class SearchResultsPage extends Component<Props, State> {
    state: State = {
        city: this.props.location.search.replace('?', ''),
        currentPage: 1,
        hasMore: true,
        totalPages: 0,
        errorMessage: '',
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
            .catch((err: string) => this.setState({ errorMessage: err }));
    };

    updateState = (response: { total_results: number; page: number; total_pages: number }) => {
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
                <div className={styles.wrapper}>
                    <CustomLink href="/">Back</CustomLink>
                    <div className={styles.text}>
                        <Text bold center>
                            {apartmentsList.length} of {totalPages === 0 ? apartmentsList.length : totalPages} matches
                        </Text>
                    </div>
                </div>

                <InfiniteScroll loadMore={this.loadItems} hasMore={hasMore}>
                    <ul>
                        {apartmentsList.map((apartment) => (
                            <ResultPageCart
                                key={apartment.lister_url}
                                city={city}
                                id={getApartmentId(apartment)}
                                img={apartment.thumb_url}
                                price={apartment.price_formatted}
                                bedroom={+apartment.bedroom_number}
                                title={apartment.title}
                            />
                        ))}
                    </ul>
                </InfiniteScroll>
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    apartmentsList: state.apartmentsList.apartmentsList,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchResult: (city: string, page: number) => dispatch(fetchResult(city, page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResultsPage);
