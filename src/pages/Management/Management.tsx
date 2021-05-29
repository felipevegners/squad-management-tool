import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import ConfigureSquad from '../../Containers/ConfigureSquad/ConfigureSquad';
import TeamInformationForm from '../../Containers/TeamInformationForm/TeamInformationForm';

import { teamActions } from '../../store/CreateTeam/actions';
import { useDispatch } from 'react-redux';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    const [team, setTeam] = useState({});
    const dispatch = useDispatch();

    const getTeamInformation = (info: any) => {
        setTeam(info);
    };

    const getSquadConfig = (info: any) => {
        setTeam(info);
    };

    console.log('info data ---> ', team);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(teamActions.getTeamInfo(team));
        console.log('foooo');
    };
    return (
        <S.Container>
            <Card title="Create your team" content="">
                <form onSubmit={handleSubmit}>
                    <TeamInformationForm sendData={getTeamInformation} />
                    <ConfigureSquad />
                </form>
            </Card>
        </S.Container>
    );
};

export default Management;
