import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'reset-css';

import Layout from '../Layout/Layout';
import PropertySearchPage from '../PropertySearchPage/PropertySearchPage';
import TodoFavouritesPage from '../../containers/TODO-FavouritesPage/TODO-FavouritesPage';
import SearchResultPage from '../SearchResultsPage/SearchResultsPage';
import TodoPropertyListingPage from '../../containers/TODO-PropertyListingPage/TODO-PropertyListingPage';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={PropertySearchPage} />
                <Route path="/result:city?" component={SearchResultPage} />
                <Route path="/listing" component={TodoPropertyListingPage} />
                <Route path="/favourites" component={TodoFavouritesPage} />
            </Switch>
        </Layout>
    );
}

export default App;
