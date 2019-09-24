import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchPageForm.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CustomLink from '../../components/UI/CustomLink/CustomLink';
import SearchPageSearchedList from '../../components/PropertySearchPage/SearchPageSearchedList/SearchPageSearchedList';
import fetchSearch from '../../store/actions/fetchSearch';
import ErrorIndicator from '../../components/Error/ErrorIndicator/ErrorIndicator';

class SearchPageForm extends Component {
    state = {
        value: '',
        isRedirect: false,
        errorMessage: null,
    };

    handleChange = (e) => {
        const { value } = e.target;

        return this.setState({ value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { value } = this.state;

        if (value === '') {
            return false;
        }

        return this.props
            .fetchSearch(value)
            .then(() => this.setState({ isRedirect: true }))
            .catch((err) => this.setState({ errorMessage: err.toString() }));
    };

    render() {
        const { value, isRedirect, errorMessage } = this.state;

        if (isRedirect) {
            return <Redirect to={`/result?${value}`} />;
        }

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <Input onChange={this.handleChange} value={value} placeholder="newcastle" />
                <div className={styles.searchWrapper}>
                    <div className={styles.submitButton}>
                        <Button type="submit">Go</Button>
                    </div>
                    <CustomLink href="/result">My location</CustomLink>
                </div>
                {errorMessage === null ? <SearchPageSearchedList /> : <ErrorIndicator errorMessage={errorMessage} />}
            </form>
        );
    }
}

SearchPageForm.propTypes = {
    fetchSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    fetchSearch: (searchItem) => dispatch(fetchSearch(searchItem)),
});

export default connect(
    null,
    mapDispatchToProps
)(SearchPageForm);
