import React from 'react';
import Card from '../../Components/Card/Card';
import PlayersList from '../../Containers/PlayersList/PlayersList';
import SearchPlayer from '../../Containers/SearchPlayers/SearchPlayer';
import TeamInformationForm from '../../Containers/TeamInformationForm/TeamInformationForm';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    return (
        <S.Container>
            <Card title="Create your team" content="">
                <S.Title>Team Information</S.Title>
                <TeamInformationForm />
                <SearchPlayer />
                {/* <PlayersList /> */}
            </Card>
        </S.Container>
    );
};

export default Management;
