import React from 'react';

import ResetSyle from './styles/Reset.styles';

import * as S from './App.styles';

import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import Routes from './routes/routes';

const App: React.FC = () => {
    return (
        <S.App>
            <ResetSyle />
            <Header />
            <Routes />
            <Footer />
        </S.App>
    );
};

export default App;
