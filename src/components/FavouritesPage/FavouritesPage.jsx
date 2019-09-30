import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './FavouritesPage.css';
import Button from '../UI/Button/Button';
import Title from '../UI/Typography/Title/Title';
import Text from '../UI/Typography/Text/Text';
import ResultPageCart from '../SearchResultsPage/ResultPageCart/ResultPageCart';
import getFavourite from '../../store/actions/getFavourite';
import getApartmentId from '../../utils/getApartmentId';

class FavouritesPage extends Component {
    state = {
        favorites: [],
    };

    componentDidMount() {
        this.props.getFavourite('favorites').then((favorites) => this.setState({ favorites }));
    }

    render() {
        const { favorites } = this.state;

        return (
            <>
                <div className={styles.wrapper}>
                    <Button onClick={this.props.history.goBack}>Back</Button>
                    <Title>Favourites</Title>
                </div>

                {favorites.length ? (
                    <ul>
                        {this.state.favorites.map((favorite) => (
                            <ResultPageCart
                                key={favorite.lister_url}
                                city={favorite.city}
                                id={getApartmentId(favorite)}
                                image={favorite.thumb_url}
                                price={favorite.price_formatted}
                                bedroomNumber={+favorite.bedroom_number}
                                title={favorite.title}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className={styles.text}>
                        <Text center>You don`t have favorite item</Text>
                    </div>
                )}
            </>
        );
    }
}

FavouritesPage.propTypes = {
    history: PropTypes.object.isRequired,
    getFavourite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    getFavourite: (key) => dispatch(getFavourite(key)),
});

export default connect(
    null,
    mapDispatchToProps
)(FavouritesPage);
