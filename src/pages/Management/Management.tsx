import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import ConfigureSquad from '../../Containers/ConfigureSquad/ConfigureSquad';
import TeamInformationForm from '../../Containers/TeamInformationForm/TeamInformationForm';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { teamActions } from '../../store/CreateTeam/actions';
import { useDispatch } from 'react-redux';

import * as S from './Management.styles';

interface RouteParams {
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Management extends RouteComponentProps<RouteParams> {}

const Management: React.FC<Management> = (props) => {
    const [team, setTeam] = useState<Record<string, any>>({});
    const [teamInfo, setTeamInfo] = useState({});
    const [squadConfig, setSquadConfig] = useState({});
    const dispatch = useDispatch();

    const params = useParams<RouteParams>();

    const getTeamInformation = (info: any) => {
        setTeamInfo(info);
    };

    const getSquadConfig = (config: any) => {
        setSquadConfig(config);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // setTeam({ ...teamInfo, ...squadConfig });
        setTimeout(() => {
            dispatch(
                teamActions.createNewTeam({ ...teamInfo, ...squadConfig })
            );
        }, 1000);
    };
    return (
        <S.Container>
            <p>params: {params.id}</p>
            <Card title="Create your team" content="">
                <form onSubmit={handleSubmit}>
                    <TeamInformationForm sendData={getTeamInformation} />
                    <ConfigureSquad sendConfig={getSquadConfig} />
                </form>
            </Card>
        </S.Container>
    );
};

export default Management;
