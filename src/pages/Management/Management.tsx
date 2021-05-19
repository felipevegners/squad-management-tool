import React from 'react';
import PlayersList from '../../Containers/PlayersList/PlayersList';
import SearchPlayer from '../../Containers/SearchPlayers/SearchPlayer';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    return (
        <S.Container>
            <SearchPlayer />
            <PlayersList />
        </S.Container>
    );
};

export default Management;
