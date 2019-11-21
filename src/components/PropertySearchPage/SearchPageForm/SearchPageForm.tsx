import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import SearchPageSearchedList from '../SearchPageSearchedList/SearchPageSearchedList';
import fetchSearch from '../../../store/actions/fetchSearch';
import fetchCoords from '../../../store/actions/fetchCoords';
import ErrorIndicator from '../../Error/ErrorIndicator/ErrorIndicator';
import { ThunkDispatch } from 'redux-thunk';

const styles = require('./SearchPageForm.css');

type State = {
    value: string;
    isRedirect: boolean;
    errorMessage: string;
};
type Props = {
    fetchSearch: (searchItem: string) => any;
};

export class SearchPageForm extends Component<Props, State> {
    state: State = {
        value: '',
        isRedirect: false,
        errorMessage: '',
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        return this.setState({ value });
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { value } = this.state;

        if (value === '') {
            return false;
        }

        return this.props
            .fetchSearch(value)
            .then(() => this.setState({ isRedirect: true }))
            .catch((err: Error) => this.setState({ errorMessage: err.toString() }));
    };

    handleClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            return fetchCoords(`${position.coords.latitude},${position.coords.longitude}`)
                .then(this.props.fetchSearch)
                .catch(() => {
                    this.setState({ value: 'London' });
                    this.props.fetchSearch('London');
                })
                .then(() => this.setState({ isRedirect: true }));
        });
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
                    <Button type="button" onClick={this.handleClick}>
                        My location
                    </Button>
                </div>
                {errorMessage === '' ? <SearchPageSearchedList /> : <ErrorIndicator errorMessage={errorMessage} />}
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchSearch: (searchItem: string) => dispatch(fetchSearch(searchItem)),
});

export default connect(
    null,
    mapDispatchToProps
)(SearchPageForm);
