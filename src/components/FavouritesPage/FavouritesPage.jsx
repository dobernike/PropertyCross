import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './FavouritesPage.css';
import ResultPageCart from '../SearchResultsPage/ResultPageCart/ResultPageCart';
import getFavourite from '../../store/actions/getFavourite';
class FavouritesPage extends Component {
    state = {
        favorites: [],
    };

    componentDidMount() {
        this.props.getFavourite('favorites').then((favorites) => this.setState({ favorites }));
    }

    render() {
        return (
            <>
                <p className={styles.text}>Favourites</p>
                <ul>
                    {this.state.favorites.map((favorite) => (
                        <ResultPageCart
                            key={favorite.lister_url}
                            city={favorite.city}
                            id={favorite.lister_url.match(/(\d{5,})/g)[0]}
                            image={favorite.thumb_url}
                            price={favorite.price_formatted}
                            bedroomNumber={+favorite.bedroom_number}
                            title={favorite.title}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

FavouritesPage.propTypes = {
    getFavourite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    getFavourite: (key) => dispatch(getFavourite(key)),
});

export default connect(
    null,
    mapDispatchToProps
)(FavouritesPage);
