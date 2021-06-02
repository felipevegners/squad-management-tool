import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button/Button.styles';
import Card from '../../Components/Card/Card';
import Table from '../../Components/Table/Table';
import { rootStore } from '../../store/store';

import * as S from './MyTeams.styles';

const MyTeams = (): JSX.Element => {
    const teamsState = useSelector((state: rootStore) => state.teams);

    const { teams } = teamsState;

    return (
        <S.Container>
            <Card
                title="My Teams"
                content={
                    <Link to="/management">
                        <Button
                            width="40px"
                            height="40px"
                            borderRad="12px"
                            fontSize="30px"
                        >
                            +
                        </Button>
                    </Link>
                }
            >
                <Table data={[...teams]} />
            </Card>
        </S.Container>
    );
};

export default MyTeams;
