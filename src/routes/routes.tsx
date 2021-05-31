import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home/Home';
import TeamConfiguration from '../Containers/TeamConfiguration/TeamConfiguration';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/management" component={TeamConfiguration} />
            <Route
                exact
                path="/management/edit/:id"
                component={TeamConfiguration}
            />
        </Switch>
    );
};

export default Routes;
