import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Card from '../../Components/Card/Card';
import { rootStore } from '../../store/store';

import * as S from './TopFive.styes';

const TopFive = (): JSX.Element => {
    const history = useHistory();
    const teamsState = useSelector((state: rootStore) => state.teams);
    const { teams } = teamsState;

    const sortTeamsByHighAge = () => {
        const sortedTeams = [...teams].sort(
            (a, b) => parseFloat(b.avAge) - parseFloat(a.avAge)
        );

        if (sortedTeams.length > 5) {
            const topFive = sortedTeams.slice(0, 5);
            return topFive;
        }

        return sortedTeams;
    };

    const sortTeamsByLowAge = () => {
        const sortedTeams = [...teams].sort(
            (a, b) => parseFloat(a.avAge) - parseFloat(b.avAge)
        );
        if (sortedTeams.length > 5) {
            const topFive = sortedTeams.slice(0, 5);
            return topFive;
        }
        return sortedTeams;
    };

    const [top5High] = useState(sortTeamsByHighAge);
    const [top5Low] = useState(sortTeamsByLowAge);

    return (
        <S.Container>
            <Card title="Top 5" content="">
                <S.ListsContainer>
                    <S.ListWrap>
                        <S.ListTitle>Highest avg age</S.ListTitle>
                        <S.List>
                            {top5High.map((team, i) => (
                                <S.ListItem
                                    key={i}
                                    onClick={() =>
                                        history.push(
                                            `/management/edit/${team.id}`
                                        )
                                    }
                                >
                                    <p>{team.name}</p>
                                    <p>
                                        <strong>
                                            {team.avAge ? team.avAge : 0}
                                        </strong>
                                    </p>
                                </S.ListItem>
                            ))}
                        </S.List>
                    </S.ListWrap>
                    <S.ListWrap>
                        <S.ListTitle>Lowest avg age</S.ListTitle>
                        <S.List>
                            {top5Low.map((team, i) => (
                                <S.ListItem
                                    key={i}
                                    onClick={() =>
                                        history.push(
                                            `/management/edit/${team.id}`
                                        )
                                    }
                                >
                                    <p>{team.name}</p>
                                    <p>
                                        <strong>
                                            {team.avAge ? team.avAge : 0}
                                        </strong>
                                    </p>
                                </S.ListItem>
                            ))}
                        </S.List>
                    </S.ListWrap>
                </S.ListsContainer>
            </Card>
        </S.Container>
    );
};

export default TopFive;
