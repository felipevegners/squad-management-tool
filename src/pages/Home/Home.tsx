import React from 'react';
import MyTeams from '../../Containers/MyTeams/MyTeams';
import PickedPlayer from '../../Containers/PickedPlayer/PickedPlayer';
import TopFive from '../../Containers/TopFive/TopFive';

import * as S from './Home.styles';

const Home = (): JSX.Element => {
    return (
        <S.MainContainer>
            <MyTeams />
            <TopFive />
            <PickedPlayer />
        </S.MainContainer>
    );
};

export default Home;
