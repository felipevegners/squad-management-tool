import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Management from './Pages/Management/Management';
import Home from './Pages/Home/Home';

import ResetSyle from './styles/Reset.styles';

import * as S from './App.styles';

import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';

const App: React.FC = () => {
    return (
        <S.App>
            <ResetSyle />
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/management" component={Management} />
            </Switch>
            <Footer />
        </S.App>
    );
};

export default App;
