import * as React from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';

import PageNotFound from './pages/PageNotFound';
import Search from './pages/Search';

const App = () => (
    <Switch>
        <Redirect exact from="/" to="/search" />
        <Route component={Search} exact path="/search" />
        <Route component={PageNotFound} />
    </Switch>
);

export default withRouter(App);
