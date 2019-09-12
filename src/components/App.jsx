import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Page1, Page2, Page3 } from './pages';
import Menu from './Menu';

import 'reset-css';
import styles from '../styles/App.css';

function App() {
    return (
        <>
            <Menu />
            <main>
                <Switch>
                    <Route path="/" component={() => <h1 className={styles.title}>Hello world</h1>} exact />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                    <Redirect to="/" exact />
                </Switch>
            </main>
        </>
    );
}

export default App;
