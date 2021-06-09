import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';
import { rootStore } from '../../store/store';

import * as S from './TopFive.styes';

const TopFive = (): JSX.Element => {
    const teamsState = useSelector((state: rootStore) => state.teams);

    const { teams } = teamsState;

    return (
        <S.Container>
            <Card title="Top 5" content="">
                {teams.map((team, i) => (
                    <div key={i} style={{ display: 'flex' }}>
                        <p>
                            {team.name} - {team.avAge ? team.avAge : 0}
                        </p>
                    </div>
                ))}
            </Card>
        </S.Container>
    );
};

export default TopFive;
