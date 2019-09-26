import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchPageSearchedList.css';
import Text from '../../UI/Typography/Text/Text';
import SearchPageItem from '../SearchPageItem/SearchPageItem';
import { SEARCH_STORAGE } from '../../../store/constants/constants';
import searchedListLoad from '../../../store/actions/searchedListLoad';

class SearchPageSearchedList extends Component {
    state = {
        redirectValue: '',
    };

    componentDidMount() {
        this.props.searchedListLoad(SEARCH_STORAGE);
    }

    handleRedirect = (redirectValue) => {
        this.setState({ redirectValue });
    };

    render() {
        const { redirectValue } = this.state;
        const { searchedList } = this.props;

        if (redirectValue !== '') {
            return <Redirect to={`/result?${redirectValue}`} />;
        }

        return (
            <>
                <div className={styles.info}>
                    <Text>Recent searches:</Text>
                </div>
                <ul className={styles.list}>
                    {searchedList.length > 0 ? (
                        searchedList.map((item) => (
                            <SearchPageItem key={item} item={item} onClick={this.handleRedirect} />
                        ))
                    ) : (
                        <p>Ваша история поиска чиста</p>
                    )}
                </ul>
            </>
        );
    }
}

SearchPageSearchedList.propTypes = {
    searchedList: PropTypes.array.isRequired,
    searchedListLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    searchedList: state.searchedList.searchedList,
});

const mapDispatchToProps = (dispatch) => ({
    searchedListLoad: (key) => dispatch(searchedListLoad(key)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPageSearchedList);
