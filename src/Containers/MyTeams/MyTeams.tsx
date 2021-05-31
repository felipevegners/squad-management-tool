import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../Components/Button/Button.styles';
import Card from '../../Components/Card/Card';
import { rootStore } from '../../store/store';

import * as S from './MyTeams.styles';

const MyTeams = (): JSX.Element => {
    const history = useHistory();
    const teamsState = useSelector((state: rootStore) => state.teams);

    const { teams } = teamsState;

    console.log('redux teams ---> ', teams);
    return (
        <S.Container>
            <Card
                title="My Teams"
                content={
                    <Link to="/management">
                        <Button>+</Button>
                    </Link>
                }
            >
                {teams
                    ? teams.map((team) => (
                          <div key={team.id}>
                              <p>{team.id}</p>
                              <p>{team.name}</p>
                              <p>{team.description}</p>
                              <button
                                  onClick={() =>
                                      history.push(
                                          `/management/edit/${team.id}`
                                      )
                                  }
                              >
                                  edit
                              </button>
                          </div>
                      ))
                    : ''}
            </Card>
        </S.Container>
    );
};

export default MyTeams;
