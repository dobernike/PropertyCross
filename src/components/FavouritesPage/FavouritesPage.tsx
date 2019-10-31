import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import Title from '../UI/Typography/Title/Title';
import Text from '../UI/Typography/Text/Text';
import ResultPageCart from '../SearchResultsPage/ResultPageCart/ResultPageCart';
import getFavourite from '../../store/actions/getFavourite';
import getApartmentId from '../../utils/getApartmentId';
import { ThunkDispatch } from 'redux-thunk';
const styles = require('./FavouritesPage.css');

type State = {
    favorites: any[];
};
type Props = {
    history: {
        goBack: () => void;
    };
    getFavourite: (key: string) => any;
};

export class FavouritesPage extends Component<Props> {
    state: State = {
        favorites: [],
    };

    componentDidMount() {
        this.props.getFavourite('favorites').then((favorites: []) => this.setState({ favorites }));
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
                                img={favorite.thumb_url}
                                price={favorite.price_formatted}
                                bedroom={+favorite.bedroom_number}
                                title={favorite.title}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className={styles.text}>
                        <Text center>You have not added any properties to your favourites</Text>
                    </div>
                )}
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getFavourite: (key: string) => dispatch(getFavourite(key)),
});

export default connect(
    null,
    mapDispatchToProps
)(FavouritesPage);
