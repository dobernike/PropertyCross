import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'reset-css';

import Layout from '../Layout/Layout';
import PropertySearchPage from '../PropertySearchPage/PropertySearchPage';
import SearchResultPage from '../SearchResultsPage/SearchResultsPage';
import FavouritesPage from '../FavouritesPage/FavouritesPage';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={PropertySearchPage} />
                <Route path="/result:city?" component={SearchResultPage} />
                <Route path="/favourites" exact component={FavouritesPage} />
                <Route path="/listing" component={() => {}} />
            </Switch>
        </Layout>
    );
}

export default App;
