import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchPageSearchedList.css';
import Text from '../../UI/Typography/Text/Text';
import SearchPageItem from '../SearchPageItem/SearchPageItem';
import { SEARCH_STORAGE } from '../../../store/constants/constants';
import searchedListLoad from '../../../store/actions/searchedListLoad';

class SearchPageSearchedList extends Component {
    componentDidMount() {
        this.props.searchedListLoad(SEARCH_STORAGE);
    }

    render() {
        const { searchedList } = this.props;

        return (
            <>
                <Text>Recent searches:</Text>

                <ul className={styles.list}>
                    {searchedList.length > 0 ? (
                        searchedList.map((item) => <SearchPageItem key={item} item={item} />)
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
