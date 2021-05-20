import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home/Home';
import Management from '../Pages/Management/Management';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/management" component={Management} />
        </Switch>
    );
};

export default Routes;
