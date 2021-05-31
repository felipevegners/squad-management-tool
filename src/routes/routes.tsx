import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router';
import Home from '../Pages/Home/Home';
import Management from '../Pages/Management/Management';

// interface AllRoutes {}

const Routes: React.FC<any> = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/management" component={Management} />
            <Route exact path="/management/edit/:id" component={Management} />
        </Switch>
    );
};

export default Routes;
