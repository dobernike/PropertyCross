import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Text from '../../UI/Typography/Text/Text';
import SearchPageItem from '../SearchPageItem/SearchPageItem';
import { SEARCH_STORAGE } from '../../../store/constants/constants';
import searchedListLoad from '../../../store/actions/searchedListLoad';
import { RootState } from '../../../store/reducers/rootReducer';

const styles = require('./SearchPageSearchedList.css');

type State = {
    redirectValue: string;
};
type Props = {
    searchedList: string[];
    searchedListLoad: (key: string) => any;
};

class SearchPageSearchedList extends Component<Props, State> {
    state: State = {
        redirectValue: '',
    };

    componentDidMount() {
        this.props.searchedListLoad(SEARCH_STORAGE);
    }

    handleRedirect = (redirectValue: string) => {
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

const mapStateToProps = (state: RootState) => ({
    searchedList: state.searchedList.searchedList,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    searchedListLoad: (key: string) => dispatch(searchedListLoad(key)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPageSearchedList);
